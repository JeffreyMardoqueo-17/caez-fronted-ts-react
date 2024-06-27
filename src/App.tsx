import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './components/hooks/theme';
import MainTemplate from './components/views/public/MainTemplate';
import Dashboard from './components/views/public/Home/Dashboard';
import AlumnosPage from './components/views/public/Alumno/AlumnosPage';
import LoginForm from './components/views/public/LoginForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MultiLevelSidebar from './components/Sidebar/MultiLevelSidebar';
import Account1 from './components/acout/acout';

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

    const sidebar = <MultiLevelSidebar toggleTheme={toggleTheme} theme={theme} isOpen={true} />;
    const headerContent = <header />;

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Router>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen flex flex-col">
                    <MainTemplate sidebar={sidebar} header={headerContent}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" replace />} />
                            <Route path="/home" element={<Dashboard />} />
                            <Route path="/alumnos" element={<AlumnosPage />} />
                            <Route path="/formulario" element={<Account1 />} />
                        </Routes>
                    </MainTemplate>
                </div>
            </div>
        </Router>
    );
};

export default App;


//   <Route path="/home" element={<MainTemplate sidebar={sidebar} header={headerContent} />}>
//                             <Route index element={<Dashboard />} />
//                             <Route path="alumnos" element={<AlumnosPage />} />
//                             <Route path="formulario" element={<Account1 />} />
//                         </Route>