import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

interface CabeceraProps {
    toggleSidebar: () => void;
}

export const Cabecera: React.FC<CabeceraProps> = ({ toggleSidebar }) => {
    return (
        <div className="w-full flex items-center justify-between bg-lightTheme-background dark:bg-darkTheme-formulario border-b-2 border-b-lightTheme-hover text-white p-4 dark:border-b-darkTheme-hover">
            <div className="text-lg font-bold ml-3 text-darkTheme-icono">GESTOR DE PAGOS CAEZ</div>
            <div className="block lg:hidden">
                <button onClick={toggleSidebar} className="text-black dark:text-white">
                    <Bars3Icon className="h-8 w-8" />
                </button>
            </div>
        </div>
    );
};

