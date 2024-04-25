import { useEffect, useMemo, useState } from 'react';
import { searchPrompt } from 'service/promptService';
import type { Prompt } from 'types';

export const useSearchPrompt = (
    promptKeyword: string,
    searchDelay = 1000
): [boolean, { keywordResults: Prompt[]; highlightResults: Prompt[] }] => {
    const [results, setResults] = useState<Prompt[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const keywordResults = useMemo(() => results.filter((i) => !i.highlight), [results]);
    const highlightResults = useMemo(() => results.filter((i) => i.highlight), [results]);

    useEffect(() => {
        if (!promptKeyword) {
            setIsLoading(false);
            setResults([]);
            return;
        }

        setIsLoading(true);
        const delay = setTimeout(() => {
            searchPrompt(promptKeyword.toLowerCase()).then((data) => {
                setResults(data);
                setIsLoading(false);
            });
        }, searchDelay);

        return () => {
            clearTimeout(delay);
        };
    }, [promptKeyword, searchDelay]);

    return [isLoading, { keywordResults, highlightResults }];
};
