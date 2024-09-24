import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaBell } from 'react-icons/fa'; // Íconos de barras, cerrar y notificaciones
import { jwtDecode } from 'jwt-decode';

interface CabeceraProps {
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
}

const Cabecera: React.FC<CabeceraProps> = ({ isSidebarOpen, onToggleSidebar }) => {
    const [userName, setUserName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null); // Para el avatar del usuario

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const decodedToken = jwtDecode<{ name: string, lastName: string, avatar?: string }>(token);
                setUserName(`${decodedToken.name} ${decodedToken.lastName}`);
                setAvatarUrl(decodedToken.avatar ?? null); // Si el avatar está en el token
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    return (
        <div className="w-full flex items-center justify-between bg-white dark:bg-darkTheme-formulario  dark:border-gray-700 text-black dark:text-white p-4  fixed z-50">
            {/* Botón para colapsar/expandir sidebar */}
            <button
                className="p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
                onClick={onToggleSidebar}
            >
                {isSidebarOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>

            {/* Espaciado central vacío para equilibrar la estructura */}
            <div className="flex-1"></div>

            {/* Iconos de notificaciones y usuario */}
            <div className="flex items-center space-x-4">
                {/* Ícono de notificaciones */}
                <button className="relative text-gray-600 dark:text-gray-300 focus:outline-none">
                    <FaBell className="h-6 w-6" />
                    {/* Indicador de notificación */}
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 h-2.5 w-2.5 bg-red-500 text-white text-xs rounded-full"></span>
                </button>

                {/* Avatar del usuario */}
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm">
                        {userName.charAt(0)} {/* Mostrar la primera letra del nombre */}
                    </div>
                )}

                {/* Nombre del usuario */}
                {userName && (
                    <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                        {userName}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cabecera;
