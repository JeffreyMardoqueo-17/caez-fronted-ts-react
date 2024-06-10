// src/components/Menu/Menu.tsx
import React from 'react';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { MenuProps } from '../../../src/interfaces/themes'

const Menu: React.FC<MenuProps> = ({ toggleTheme, theme }) => {
    return (
        <div className={`flex items-center justify-center h-screen p-2 space-x-6 ${theme === 'dark' ? 'bg-darkTheme-background text-darkTheme-text' : 'bg-lightTheme-background text-lightTheme-text'}`}>
            <div className="flex flex-col items-left w-11 p-2 h-auto overflow-hidden">
                <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />
                {/* Resto del menú */}
            </div>
        </div>
    );
};

export default Menu;
