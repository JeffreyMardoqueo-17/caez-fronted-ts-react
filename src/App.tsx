import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './hooks/theme';
import MainTemplate from './views/public/layout/MainTemplate';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loader from './views/public/Loader';
import LoginForm from './views/public/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import RoutesComponent from './routers/RoutesComponent'; // Mantén todas las rutas aquí

const App: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // Función para verificar si el token existe en localStorage
    const checkAuth = () => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Si hay token, está logueado
        setLoading(false); // Ya terminamos la carga
    };

    useEffect(() => {
        checkAuth(); // Verificamos si hay un token cuando se monta el componente

        // Listener para cualquier cambio en localStorage (como cuando el token se guarda después de un login)
        window.addEventListener('storage', checkAuth);

        return () => {
            window.removeEventListener('storage', checkAuth); // Limpieza
        };
    }, []);

    if (loading) {
        return <Loader />; // Mostramos un Loader hasta que se resuelva el estado de autenticación
    }

    return (
        <Router>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen flex flex-col">
                    <Routes>
                        {/* Ruta de Login */}
                        <Route path="/login" element={!isLoggedIn ? <LoginForm /> : <Navigate to="/" />} />

                        {/* Rutas protegidas */}
                        <Route
                            path="/*"
                            element={
                                <ProtectedRoute isLoggedIn={isLoggedIn}>
                                    <MainTemplate>
                                        <RoutesComponent />
                                    </MainTemplate>
                                </ProtectedRoute>
                            }
                        />

                        {/* Redirigir cualquier otra ruta */}
                        <Route
                            path="*"
                            element={<Navigate to={isLoggedIn ? "/" : "/login"} />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
