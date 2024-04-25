import { useCallback, useState } from 'react';
import { splitParagraphIntoSegments } from 'utils';

const MAX_LENGTH = 3000;
const SEGMENT_PREFIX = 'Remember and just reply noted.\n\n';

export type Segment = {
    current: number;
    total: number;
    text: string;
}

interface Hook {
    isSplitting: boolean;
    getFirstSegment: (text: string) => Segment;
    getNextSegment: () => Segment;
    clearSegments: () => void;
}

const useSplitParagraph = (): Hook => {
    const [segments, setSegments] = useState<string[]>([]);
    const [current, setCurrent] = useState<number>(-1);
    const isSplitting = segments.length > 0 && current + 1 !== segments.length;

    const clearSegments = useCallback(() => {
        setSegments([]);
        setCurrent(-1);
    }, []);

    const getFirstSegment = useCallback(
        (text: string) => {
            const result = splitParagraphIntoSegments(text, MAX_LENGTH, SEGMENT_PREFIX);
            if (result.length > 1) {
                setSegments(result);
                setCurrent(0);
            }
            return { current: 0, total: result.length, text: result[0] };
        },
        [segments]
    );

    const getNextSegment = useCallback(() => {
        const next = current + 1;
        if (segments.length === 0 || next >= segments.length) {
            setSegments([]);
            setCurrent(-1);
            return { current: -1, total: -1, text: '' };
        }
        setCurrent(next);
        return { current: next, total: segments.length, text: segments[next] };
    }, [segments, current]);

    return {
        isSplitting,
        getFirstSegment,
        getNextSegment,
        clearSegments,
    };
};

export default useSplitParagraph;
