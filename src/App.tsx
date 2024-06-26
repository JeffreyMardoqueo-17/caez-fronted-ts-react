import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './components/hooks/theme';
import MainTemplate from './components/views/public/MainTemplate';
import Dashboard from './components/views/public/Dashboard';
import AlumnosPage from './components/views/public/AlumnosPage';
import LoginForm from './components/views/public/LoginForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MultiLevelSidebar } from './components/Sidebar/MultiLevelSidebar';
import Account1 from './components/acout/acout';

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true); // Estado para controlar la carga inicial

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
        setLoading(false); // Una vez verificado el token, se detiene la carga inicial
    }, []);

    const sidebar = <MultiLevelSidebar toggleTheme={toggleTheme} theme={theme} />;
    const headerContent = <header />;

    // Mientras se verifica el token, mostrar un mensaje de carga o spinner
    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Router>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen flex flex-col">
                    <Routes>
                        <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
                        <Route path="/home" element={<MainTemplate sidebar={sidebar} header={headerContent} />}>
                            <Route index element={<Dashboard />} />
                            <Route path="alumnos" element={<AlumnosPage />} />
                            <Route path="formulario" element={<Account1 />} />
                        </Route>
                        {/* Redirigir cualquier ruta desconocida al inicio de sesión */}
                        <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/"} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
