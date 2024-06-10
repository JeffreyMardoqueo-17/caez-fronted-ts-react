import React from 'react';
import 'tailwindcss/tailwind.css';
import Menu from './components/Menu/Menu';
import { useTheme } from './components/hooks/theme/theme';
import Login from './components/layouts/login/Login';

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="flex flex-col md:flex-row bg-lightTheme-background dark:bg-darkTheme-background min-h-screen">
                <Menu toggleTheme={toggleTheme} theme={theme} />
                <Login />
            </div>
        </div>
    );
};

export default App;
