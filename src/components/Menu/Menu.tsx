import React from 'react';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import { MenuProps } from '../../../src/interfaces/themes';
import { Link } from 'react-router-dom';

const Menu: React.FC<MenuProps> = ({ toggleTheme, theme }) => {
    return (
        <div className={`flex items-center justify-center h-screen p-2 space-x-6 ${theme === 'dark' ? 'bg-darkTheme-background text-darkTheme-text' : 'bg-lightTheme-background text-lightTheme-text'}`}>
            <div>
                <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/alumnos">Alumnos</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;
