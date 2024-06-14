import React, { ReactNode, MouseEventHandler } from 'react';

interface ActionButtonProps {
    icon: ReactNode;
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
export function ActionButton({ icon, onClick, className }: ActionButtonProps) {
return (
    <button
        className={`flex text-white items-center justify-center rounded-full text-center p-4 bg-darkTheme-icono`}
        onClick={onClick}
    >
        {icon}
    </button>
);
}