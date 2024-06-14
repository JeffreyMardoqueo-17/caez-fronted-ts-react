import React, { ReactNode, MouseEventHandler } from 'react';

interface ActionButtonProps {
    icon: ReactNode;
    action: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className: string;
}

/**
 * Componente de botón de acción.
 *
 * @component
 * @param {object} props - Las propiedades del componente.
 * @param {ReactNode} props.icon - El icono del botón.
 * @param {string} props.action - La acción del botón.
 * @param {Function} props.onClick - La función que se ejecuta al hacer clic en el botón.
 * @param {string} props.className - La clase CSS adicional para el botón.
 * @returns {JSX.Element} El elemento del botón de acción.
 */
export function ActionButton({ icon, action, onClick, className }: ActionButtonProps) {
    return (
        <button
            className={`flex items-center justify-center rounded-full p-2 ${className}`}
            onClick={onClick}
        >
            {icon}
            <span className="ml-2">{action}</span>
        </button>
    );
}
