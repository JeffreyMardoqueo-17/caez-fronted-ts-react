// src/components/Button/Button.tsx
import React from 'react';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    label: string;
}

export const Buttoom: React.FC<ButtonProps> = ({ type, label }) => (
    <button
        type={type}
        className="text-white bg-lightTheme-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-darkTheme-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
        {label}
    </button>
);

