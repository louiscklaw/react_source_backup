import { useState, useCallback } from 'react';

const useDebounce = (callback: () => void, debounce = 3000) => {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timer>();

    return useCallback(() => {
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(callback, debounce);
        setTimeoutId(newTimeoutId);
    }, [timeoutId, callback, debounce]);
};

export default useDebounce;
