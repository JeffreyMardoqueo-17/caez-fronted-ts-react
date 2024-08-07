import React, { ReactNode, MouseEventHandler } from 'react';

interface ActionButtonProps {
    icon: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string; // Haciendo que className sea opcional
}
/**
 * Componente de botón de acción.
 *
 * @component
 * @param {object} props - Las propiedades del componente.
 * @param {ReactNode} props.icon - El icono del botón.
 * @param {Function} props.onClick - La función que se ejecuta al hacer clic en el botón.
 * @param {string} [props.className] - La clase CSS adicional para el botón (opcional).
 * @returns {JSX.Element} El elemento del botón de acción.
 */
export function ActionButton({ icon, onClick, className }: ActionButtonProps) {
    return (
        <button
            className={`flex items-center text-white justify-center rounded-full text-center p-4 bg-darkTheme-icono ${className ?? ''}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
}
