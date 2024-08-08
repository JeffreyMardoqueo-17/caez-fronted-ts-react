import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useTheme } from './hooks/theme';
// import MainTemplate from './views/public/MainTemplate';
import MainTemplate from './views/public/layout/MainTemplate';
import Dashboard from './views/public/Home/Dashboard';
import AlumnosPage from './views/public/Alumno/AlumnosPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MultiLevelSidebar } from './components/Sidebar/MultiLevelSidebar';
import Account1 from './components/acout/acout';
import ShowTipoDocumento from './components/showTipoDocumento/ShowTipoDocumento';
import AlumnoCreate from './views/public/Alumno/AlumnoCreate';
import EncargadoPage from './views/public/Encargado/EncargadoPage';
import Cabecera from './components/header/Cabecera';
import Loader from './views/public/Loader';
import Confirmacion from './components/notificaciones/confirmacion';
import EnfermedadPage from './views/public/Enfermedad/EnfermedadPage ';

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
    // const sidebar = "Aqui va el sidebar"
    const headerContent = <Cabecera />

    if (loading) {
        return <Loader />
    }

    return (
        <Router>
            <div className={theme === 'dark' ? 'dark' : ''}>
                <div className="bg-lightTheme-background dark:bg-darkTheme-background min-h-screen flex flex-col">
                    <MainTemplate sidebar={sidebar} header={headerContent}>
                        <Routes>
                            {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                            <Route path="/" element={<Dashboard />} />
                            <Route path='/TipoDocumento' element={<ShowTipoDocumento />} />
                            <Route path='/alumnos/create' element={<AlumnoCreate />} />
                            <Route path="/alumnos" element={<AlumnosPage />} />
                            <Route path="/formulario" element={<Account1 />} />
                            <Route path='Encargados' element={<EncargadoPage />} />
                            <Route path="/Loader" element={<Loader />} />
                            <Route path="enfermedad/" element={<EnfermedadPage />} />
                            <Route path='/confirmar' element={<Confirmacion />} />
                        </Routes>
                    </MainTemplate>
                </div>
            </div>
        </Router>
    );
};

export default App;