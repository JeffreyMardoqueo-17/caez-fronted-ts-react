import React, { FC } from 'react';
import { Input } from '@material-tailwind/react';
import { CustomInputProps } from '../../interfaces/CustomInputProps';

export const CustomInput: FC<CustomInputProps> = ({ label, placeholder, value, onChange }) => {
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
                className="text-lightTheme-gray dark:text-darkTheme-gray dark:border-darkTheme-background"
                onPointerEnterCapture={() => { } }
                onPointerLeaveCapture={() => { } } 
                crossOrigin={undefined}            />
        </div>
    );
};
