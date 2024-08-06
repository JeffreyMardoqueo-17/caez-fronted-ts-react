// src/components/Checkbox/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
    id: string;
    label: string;
    required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, required }) => (
    <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
            <input
                id={id}
                type="checkbox"
                className="w-4 h-4 border border-lightTheme-gray rounded bg-lightTheme-background focus:ring-3 focus:ring-blue-300 dark:bg-darkTheme-background dark:border-darkTheme-gray dark:focus:ring-blue-600 dark:ring-offset-darkTheme-background"
                required={required}
            />
        </div>
        <label htmlFor={id} className="ml-2 text-sm font-medium text-lightTheme-gray dark:text-darkTheme-gray">
            {label}
        </label>
    </div>
);

export default Checkbox;
