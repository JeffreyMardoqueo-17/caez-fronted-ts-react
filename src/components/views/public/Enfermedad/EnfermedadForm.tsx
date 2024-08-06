import React from 'react';

interface Props {
    enfermedad: {
        nombre: string;
        descripcion: string;
    };
}

const EnfermedadForm = ({ enfermedad }: Props) => {
    return (
        <div>
            <p>Nombre: {enfermedad.nombre}</p>
            <p>Descripción: {enfermedad.descripcion}</p>
        </div>
    );
};

export default EnfermedadForm;
