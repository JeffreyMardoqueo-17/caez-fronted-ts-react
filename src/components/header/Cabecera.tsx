import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Para la redirección

interface CabeceraProps {
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
}

const Cabecera: React.FC<CabeceraProps> = ({ isSidebarOpen, onToggleSidebar }) => {
    const [userName, setUserName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null); // Para el avatar del usuario
    const navigate = useNavigate(); // Hook para redirigir

    useEffect(() => {
        // Obtener el usuario guardado desde localStorage
        const user = localStorage.getItem('user');
        console.log("Obteniendo usuario desde localStorage:", user); // Para depuración

        if (user) {
            try {
                const parsedUser = JSON.parse(user);
                console.log("Usuario parseado:", parsedUser); // Para depuración
                setUserName(`${parsedUser.name} ${parsedUser.lastName}`);
                // Si tienes un avatar guardado en el token, puedes añadirlo aquí
                setAvatarUrl(parsedUser.avatar ?? null);
            } catch (error) {
                console.error('Error parsing user from localStorage:', error);
            }
        } else {
            console.log("No se encontró el usuario en localStorage");
        }
    }, []); // Solo ejecutar una vez cuando el componente se monta

    // Manejar el logout
    const handleLogout = () => {
        // Eliminar token y datos de usuario del localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redirigir al usuario a la página de login
        // navigate('/login');
        window.location.reload(); // Recarga la página
    };

    return (
        <div className="w-full flex items-center justify-between bg-white dark:bg-darkTheme-formulario dark:border-gray-700 text-black dark:text-white p-4 fixed z-50">
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
                        {userName ? userName.charAt(0) : "?"} {/* Mostrar la primera letra del nombre */}
                    </div>
                )}

                {/* Nombre del usuario */}
                {userName && (
                    <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                        {userName}
                    </div>
                )}

                {/* Botón de Logout */}
                <button
                    onClick={handleLogout} // Manejador de click para logout
                    className="ml-4 text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                >
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};

export default Cabecera;
