import React from "react";
import { IconType } from "react-icons";
import { Card } from '@tremor/react';

interface CardProps {
    title: string;
    amount: string;
    Icon: IconType;
    iconColor?: string;  // Añadimos una propiedad opcional para el color del icono
}

export const DashboardCard: React.FC<CardProps> = ({ title, amount, Icon, iconColor }) => {
    return (
        <Card
            className={`mx-auto max-w-xs ${iconColor} bg-lightTheme-background dark:bg-darkTheme-formulario dark:hover:bg-darkTheme-hover cursor-pointer flex items-center justify-between hover:bg-lightTheme-hover`}
            decoration="top"
            decorationColor="indigo"
        >
            <div>
                <p className="text-3xl text-tremor-default text-tremor-content dark:text-dark-tremor-content">{title}</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{amount}</p>
            </div>
            <Icon className="w-16 h-16 ml-4" />
        </Card>
    );
};