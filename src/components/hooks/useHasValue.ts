import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks the value of an input field and determines if it has a value or not.
 *
 * @param initialValue - The initial value of the input field.
 * @returns An object containing the current value, a function to update the value, and a boolean indicating if the input field has a value.
 */
export const useHasValue = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const [hasValue, setHasValue] = useState(initialValue !== '');

    useEffect(() => {
        setHasValue(value !== '');
    }, [value]);

    return { value, setValue, hasValue };
};
