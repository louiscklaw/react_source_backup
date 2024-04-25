import type React from 'react';
import { useState, useEffect, useRef } from 'react';

const useToggle = <M extends HTMLElement, T extends HTMLElement>(): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.RefObject<M>,
    React.RefObject<T>
] => {
    const [showToggle, setShowToggle] = useState(false);
    const toggleRef = useRef<M>(null);
    const triggerRef = useRef<T>(null);

    useEffect(() => {
        if (showToggle && toggleRef.current) {
            const closeToggle = (e: MouseEvent) => {
                if (
                    toggleRef.current &&
                    !toggleRef.current.contains(e.target as HTMLElement) &&
                    triggerRef.current &&
                    !triggerRef.current.contains(e.target as HTMLElement)
                ) {
                    setShowToggle(false);
                }
            };
            document.addEventListener('mousedown', closeToggle);
            return () => {
                document.removeEventListener('mousedown', closeToggle);
            };
        }
    }, [showToggle]);

    return [showToggle, setShowToggle, toggleRef, triggerRef];
};

export default useToggle;
