
import React from 'react';

interface InputProps {
    id: string;
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, type, label, placeholder, required }) => (
    <div className="mb-5">
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-lightTheme-gray dark:text-darkTheme-gray">
            {label}
        </label>
        <input
            type={type}
            id={id}
            className="bg-lightTheme-background border border-lightTheme-gray text-lightTheme-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-darkTheme-background dark:border-darkTheme-gray dark:placeholder-darkTheme-gray dark:text-darkTheme-text dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            required={required}
        />
    </div>
);

export default Input;
