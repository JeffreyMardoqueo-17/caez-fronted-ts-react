import React, { FC } from 'react';
import { Input } from '@material-tailwind/react';
import { CustomInputProps } from '../../interfaces/CustomInputProps';
import { useHasValue } from '../hooks/useHasValue';

/**
 * Un componente de entrada personalizado.
 *
 * @component CustomInput
 * @param {CustomInputProps} props - Las props para el componente CustomInput.
 * @param {string} props.label - La etiqueta para la entrada.
 * @param {string} props.placeholder - El marcador de posición para la entrada.
 * @param {string} props.initialValue - El valor inicial para la entrada.
 * @param {Function} props.onChange - La función de devolución de llamada que se llamará cuando cambie el valor de la entrada.
 * @returns {JSX.Element} El componente CustomInput.
 */

export const CustomInput: FC<CustomInputProps> = ({ label, placeholder, initialValue, onChange }) => {
    const { value, setValue, hasValue } = useHasValue(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChange) 
            onChange(e);
    };

    return (
        <div className="w-full">
            <label className="mb-2 font-medium text-darkTheme-background dark:text-darkTheme-gray">
                {label}
            </label>
            <Input
                size="md"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={`text-lightTheme-gray dark:text-darkTheme-gray rounded-md ${hasValue ? 'border-blue-600' : 'border-lightTheme-gray'}`}
                onPointerEnterCapture={() => { } }
                onPointerLeaveCapture={() => { } } 
                crossOrigin={undefined}            
            />
        </div>
    );
};