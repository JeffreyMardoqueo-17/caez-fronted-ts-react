import React, { FC, useState, useEffect } from 'react';
import { ComboBoxProps } from '../../interfaces/ComboBoxProps';
import { useHasValue } from '../../hooks/useHasValue';

export const ComboBox: FC<ComboBoxProps> = ({ label, options, selectedValue, onChange }) => {
    const { hasValue, setValue } = useHasValue(selectedValue);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setValue(selectedValue);
    }, [selectedValue, setValue]);

    const handleSelect = (value: string) => {
        onChange(value);
        setIsOpen(false);
    };

    const borderColor = hasValue ? 'border-blue-600' : 'border-lightTheme-gray dark:border-darkTheme-gray';

    return (
        <div className="relative w-full">
            <label className="mb-2 font-medium text-darkTheme-background dark:text-darkTheme-gray">
                {label}
            </label>
            <div className="relative">
                <button
                    type="button"
                    className={`w-full bg-lightTheme-background dark:bg-darkTheme-background border ${borderColor} rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-darkTheme-background focus:border-darkTheme-background sm:text-sm`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="block truncate text-lightTheme-gray dark:text-darkTheme-gray">
                        {options.find(option => option.value === selectedValue)?.label || 'Seleccione una opción'}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg className="h-5 w-5 text-lightTheme-gray dark:text-darkTheme-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 011.414 0L10 13.586l3.293-3.879a1 1 0 011.414 0l.793.793a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l.793-.793z" clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
                {isOpen && (
                    <ul className="absolute z-10 mt-1 w-full bg-lightTheme-background dark:bg-darkTheme-background shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto sm:text-sm">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                className={`cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100 dark:hover:bg-darkTheme-hover text-black dark:text-darkTheme-gray cursor-pointer ${selectedValue === option.value
                                        ? 'text-lightTheme-primary bg-lightTheme-hover dark:text-white dark:bg-black'
                                        : 'text-black dark:text-darkTheme-gray dark:hover:bg-darkTheme-formulario dark:hover:text-white'
                                    }`}
                                onClick={() => handleSelect(option.value)}
                            >
                                <span className={`block truncate ${selectedValue === option.value ? 'font-semibold' : 'font-normal'}`}>
                                    {option.label}
                                </span>
                                {selectedValue === option.value && (
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-darkTheme-primary">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
