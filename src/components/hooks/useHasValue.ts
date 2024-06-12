import { useState, useEffect } from 'react';

export const useHasValue = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        setHasValue(value !== '');
    }, [value]);

    return { value, setValue, hasValue };
};