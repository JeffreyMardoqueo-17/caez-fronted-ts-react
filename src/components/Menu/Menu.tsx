// src/components/Menu/Menu.tsx
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { MenuProps } from '../../../src/interfaces/themes'
const Menu: React.FC<MenuProps> = ({ toggleTheme, theme }) => {
    const icon = theme === 'dark' ? <MdDarkMode className="w-8 h-8 fill-current" /> : <WiDaySunny className="w-8 h-8 fill-current" />;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        toggleTheme();
    };

    return (
        <div className={`flex items-center justify-center h-screen p-2 space-x-6 ${theme === 'dark' ? 'bg-darkTheme-background text-darkTheme-text' : 'bg-lightTheme-background text-lightTheme-text'}`}>
            <div className="flex flex-col items-left w-11 p-2 h-auto overflow-hidden">
                <a className="flex items-center justify-center mt-3" href="#" onClick={handleClick}>
                    {icon}
                </a>
                {/* Resto del menú */}
            </div>
        </div>
    );
};

export default Menu;
