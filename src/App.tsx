// src/App.tsx
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './hooks/theme';
import MainTemplate from './views/public/layout/MainTemplate';
import { BrowserRouter as Router } from 'react-router-dom';
import { MultiLevelSidebar } from './components/Sidebar/MultiLevelSidebar';
import Cabecera from './components/header/Cabecera';
import Loader from './views/public/Loader';
import RoutesComponent from './routers/RoutesComponent';

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
        setLoading(false);
    }, []);

    const sidebar = <MultiLevelSidebar toggleTheme={toggleTheme} theme={theme} />;
    // const headerContent = <Cabecera />;

    if (loading) {
        return <Loader />;
    }

    return (
        <Router>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen flex flex-col">
                    <MainTemplate sidebar={sidebar}>
                        <RoutesComponent />
                    </MainTemplate>
                </div>
            </div>
        </Router>
    );
};

export default App;
