import { useState, useEffect } from 'react';

/**
 * Hook personalizado que realiza un seguimiento del valor de un campo de entrada y determina si tiene un valor o no.
 *
 * @param initialValue - El valor inicial del campo de entrada.
 * @returns Un objeto que contiene el valor actual, una función para actualizar el valor y un booleano que indica si el campo de entrada tiene un valor.
 */
export const useHasValue = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const [hasValue, setHasValue] = useState(initialValue !== '');

    useEffect(() => {
        setHasValue(value !== '');
    }, [value]);

    return { value, setValue, hasValue };
};
