import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './components/hooks/theme';
import MainTemplate from './components/views/public/MainTemplate';
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton';
import Dashboard from './components/views/public/Dashboard';
import AlumnosPage from './components/views/public/AlumnosPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const menu = (
        <div>
            <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />
            <nav>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/alumnos">Alumnos</Link></li>
                </ul>
            </nav>
        </div>
    );
    const headerContent = <div>Header</div>; // Ajusta esto según tu necesidad

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen flex flex-col">
                    <MainTemplate sidebar={menu} header={headerContent}>
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
