import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './components/hooks/theme';
import MainTemplate from './components/views/public/MainTemplate';
import Menu from './components/Menu/Menu';
import Dashboard from './components/views/public/Dashboard';
import { Table } from './components/Table/Table';

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const menu = "menu"
    const head = "head"

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen">

                <Menu toggleTheme={toggleTheme} theme={theme} />
                {/* Contenido de la aplicación */}
                <MainTemplate sidebar={menu} header={head}>
                    <h1>HOLA</h1>
                    <Dashboard />
                </MainTemplate>

            </div>
        </div>
    );
};

export default App;
