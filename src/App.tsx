import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './components/hooks/theme';
import MainTemplate from './components/views/public/MainTemplate';
import Dashboard from './components/views/public/Dashboard';
import AlumnosPage from './components/views/public/AlumnosPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {MultiLevelSidebar} from './components/Sidebar/MultiLevelSidebar';


const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const menu = <Menu toggleTheme={toggleTheme} theme={theme} />
    const sidebar = <MultiLevelSidebar toggleTheme={toggleTheme} theme={theme}  />
    const headerContent = <header />

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen flex flex-col">
                    <MainTemplate sidebar={sidebar} header={headerContent}>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/alumnos" element={<AlumnosPage />} />
                        </Routes>
                    </MainTemplate>
                </div>
            </div>
        </Router>
    );
};

export default App;
