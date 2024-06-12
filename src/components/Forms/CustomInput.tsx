import React, { FC, useState, useEffect } from 'react';
import { Input } from '@material-tailwind/react';
import { CustomInputProps } from '../../interfaces/CustomInputProps';

export const CustomInput: FC<CustomInputProps> = ({ label, placeholder, value, onChange }) => {
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        setHasValue(value !== '');
    }, [value]);

    return (
        <div className="w-full">
            <label className="mb-2 font-medium text-darkTheme-background dark:text-darkTheme-gray">
                {label}
            </label>
            <Input
                size="md"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`text-lightTheme-gray dark:text-darkTheme-gray ${hasValue ? 'border-blue-500' : 'border-none'}`}
                onPointerEnterCapture={() => { } }
                onPointerLeaveCapture={() => { } } 
                crossOrigin={undefined}            
            />
        </div>
    );
};