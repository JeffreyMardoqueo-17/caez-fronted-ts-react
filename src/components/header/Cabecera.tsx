import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface CabeceraProps {
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
}

const Cabecera: React.FC<CabeceraProps> = ({ isSidebarOpen, onToggleSidebar }) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const decodedToken = jwtDecode<{ name: string, lastName: string }>(token);
                setUserName(`${decodedToken.name} ${decodedToken.lastName}`);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    return (
        <div className="w-full flex items-center justify-between bg-lightTheme-primary dark:bg-darkTheme-formulario border-b-2 border-b-lightTheme-hover text-white p-4 dark:border-b-darkTheme-hover fixed z-50">
            <button
                className="lg:hidden p-2 text-gray-600 dark:text-gray-300 mr-4"
                onClick={onToggleSidebar}
            >
                {isSidebarOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                )}
            </button>
            <div className="text-lg font-bold text-darkTheme-icono flex-1">
                GESTOR DE PAGOS CAEZ
            </div>
            {userName && (
                <div className="text-lg font-bold mr-3 text-darkTheme-icono">Bienvenido, {userName}</div>
            )}
        </div>
    );
};

export default Cabecera;
