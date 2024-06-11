// src/components/ThemeToggleButton/ThemeToggleButton.tsx
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

interface ThemeToggleButtonProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ toggleTheme, theme }) => {
    const icon = theme === 'dark' ? <MdDarkMode className="w-8 h-8 fill-current" /> : <WiDaySunny className="w-8 h-8 fill-current" />;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        toggleTheme();
    };

    return (
        <a className="flex items-center justify-center mt-3" href="#" onClick={handleClick}>
            {icon}
        </a>
    );
};

export default ThemeToggleButton;
