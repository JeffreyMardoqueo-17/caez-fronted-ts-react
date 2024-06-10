import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Menu from './components/Menu/Menu';
import { useTheme } from './components/hooks/theme/theme';
import Login from './components/layouts/login/Login';
import MainTemplate from './components/views/public/MainTemplate';

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            {!isLoggedIn && (
                <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen">
                    <Menu toggleTheme={toggleTheme} theme={theme} />
                    <Login onLogin={handleLogin} />
                </div>
            )}
            {isLoggedIn && <MainTemplate />}
        </div>
    );
};

export default App;