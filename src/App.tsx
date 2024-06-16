import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './components/hooks/theme';
import MainTemplate from './components/views/public/MainTemplate';
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton';
import Dashboard from './components/views/public/Dashboard';
import AlumnosPage from './components/views/public/AlumnosPage';

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const menu = <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />;
    const headerContent = <div>Header</div>; // Ajusta esto según tu necesidad

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen flex flex-col">
                <MainTemplate sidebar={menu} header={headerContent}>
                    {/* <Dashboard /> */}
                    <AlumnosPage />
                </MainTemplate>
            </div>
        </div>
    );
};

export default App;
