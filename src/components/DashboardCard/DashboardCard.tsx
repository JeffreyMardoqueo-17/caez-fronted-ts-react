import React from "react";
import { IconType } from "react-icons";

interface CardProps {
    title: string;
    amount: string;
    Icon: IconType;
    iconColor?: string;  // Añadimos una propiedad opcional para el color del icono
}

export const DashboardCard: React.FC<CardProps> = ({ title, amount, Icon, iconColor }) => {
    return (
        <div className="bg-lightTheme-background cursor-pointer dark:bg-darkTheme-formulario shadow-md rounded-lg p-6 flex items-center justify-between border-2 dark:border-darkTheme-background border-gray-400 w-full sm:w-auto flex-1 dark:hover:border-darkTheme-border hover:bg-lightTheme-hover border-spacing-1">
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-lightTheme-gray dark:text-darkTheme-gray mb-2">{title}</h2>
                <p className="text-2xl font-bold text-lightTheme-gray dark:text-darkTheme-text">{amount}</p>
            </div>
            <Icon className={`w-16 h-16 ml-4 ${iconColor}`} />
        </div>
    );
};
