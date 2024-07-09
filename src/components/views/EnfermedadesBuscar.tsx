import React, { useState } from 'react';
import SearchComponent from '../inputs/SearchComponent/SearchComponent';

interface Enfermedad {
    Id: number;
    Nombre: string;
    Descripcion: string;
}

const EnfermedadesBuscar: React.FC = () => {
    const [selectedEnfermedad, setSelectedEnfermedad] = useState<Enfermedad | null>(null);

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <SearchComponent<Enfermedad>
                route="http://localhost:3000/enfermedad/buscar"
                renderResult={(enfermedad) => <span>{enfermedad.Nombre}</span>}
                onSelect={(enfermedad) => setSelectedEnfermedad(enfermedad)}
                getResultText={(enfermedad) => enfermedad.Nombre} 
            />
            {selectedEnfermedad && (
                <div className="mt-4 p-4 border rounded">
                    <h2 className="text-xl font-bold">{selectedEnfermedad.Nombre}</h2>
                    <p>{selectedEnfermedad.Descripcion}</p>
                </div>
            )}
        </div>
    );
};

export default EnfermedadesBuscar;