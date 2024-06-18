import React from 'react';

const ExamplePage = () => {
    return (
        <div className="flex h-screen">
            {/* Caja izquierda */}
            <div className="w-5/6 bg-gray-200 p-4">
                Contenido de la caja izquierda
            </div>
            {/* Caja derecha */}
            <div className="w-1/6 bg-gray-300 p-4">
                Contenido de la caja derecha
            </div>
        </div>
    );
};

export default ExamplePage;
