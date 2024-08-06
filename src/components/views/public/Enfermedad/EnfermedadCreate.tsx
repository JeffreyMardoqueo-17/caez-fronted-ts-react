import { useState } from 'react';
import axios from 'axios';

export const EnfermedadCreate = ({ onCreate }: { onCreate: any }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const nuevaEnfermedad = { nombre, descripcion };
            const response = await axios.post('http://localhost:3000/enfermedad', nuevaEnfermedad);
            onCreate(response.data);
        } catch (error) {
            console.error('Error al crear enfermedad:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div>
                <label htmlFor="descripcion">Descripción:</label>
                <input type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
};
