import { Card } from '@tremor/react';
import React from 'react';

interface TotalCardProps {
    title: string;
    total: number;
    icon: React.ReactNode;
}

export function TotalCard({ title, total, icon }: TotalCardProps) {
    return (
        <Card className="bg-lightTheme-primary justify-center dark:bg-darkTheme-formulario rounded-lg shadow-md p-4 text-center"
            decoration="top" 
            decorationColor="indigo">
            <div className="flex justify-center">{icon}</div>
            <p className="text-lg font-bold text-gray-800 dark:text-darkTheme-text">{title}</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-darkTheme-text">{total}</p>
        </Card>
    );
}
