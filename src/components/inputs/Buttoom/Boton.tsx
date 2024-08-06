import React from 'react';

interface BotonProps {
    texto: string;
    color: string;
    icono?: React.ReactNode;
    onClick: () => void;
}

export function Boton({ texto, color, icono, onClick }: BotonProps) {
    return (
        <button
            type="button"
            className={`text-white max-h-24 ${color} min-w-3 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg mb-2 text-2xl px-6 py-3 flex items-center justify-center`}
            onClick={onClick}
        >
            {texto}
            {icono && <span className="ml-3">{icono}</span>}
        </button>
    );
}
