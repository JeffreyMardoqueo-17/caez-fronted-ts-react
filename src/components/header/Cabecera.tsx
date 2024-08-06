import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

const Cabecera: React.FC = () => {
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
            <div className="text-lg font-bold ml-3 text-darkTheme-icono">GESTOR DE PAGOS CAEZ</div>
            {userName && (
                <div className="text-lg font-bold mr-3 text-darkTheme-icono">Bienvenido, {userName}</div>
            )}
        </div>
    );
};

export default Cabecera;
