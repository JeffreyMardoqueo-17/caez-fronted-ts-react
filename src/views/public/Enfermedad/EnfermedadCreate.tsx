import React, { useState } from 'react';
import axios from 'axios';
import { Enfermedad } from '../../../interfaces/TablasBD';
import { validateInput } from '../../../fuctions/Funciones';

export default function EnfermedadCreate() {
    const [enfermedad, setEnfermedad] = useState<Omit<Enfermedad, 'Id'>>({
        Nombre: '',
        Descripcion: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setEnfermedad((prevEnfermedad) => ({
            ...prevEnfermedad,
            [id]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const { Nombre, Descripcion } = enfermedad;

        if (!Nombre || !Descripcion) {
            setError('Los campos nombre y descripción son requeridos');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/enfermedad', {
                nombre: Nombre, // Convertir a minúsculas
                descripcion: Descripcion, // Convertir a minúsculas
            });
            setSuccess('Enfermedad creada correctamente con ID: ' + response.data.id);
            setEnfermedad({ Nombre: '', Descripcion: '' }); // Reinicia los valores del formulario
        } catch (err) {
            setError('Error al insertar la enfermedad');
            console.error('Error al insertar la enfermedad:', err);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-lightTheme-background dark:bg-darkTheme-formulario shadow-md rounded-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="Nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Nombre:</label>
                    <input
                        required
                        type="text"
                        id="Nombre"
                        value={enfermedad.Nombre}
                        onChange={handleInputChange}
                        className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(enfermedad.Nombre)}`}
                    />
                </div>
                <div>
                    <label htmlFor="Descripcion" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Descripción:</label>
                    <textarea
                        required
                        id="Descripcion"
                        value={enfermedad.Descripcion}
                        onChange={handleInputChange}
                        maxLength={255}
                        className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 min-h-24 max-h-40 ${validateInput(enfermedad.Descripcion)}`}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Crear Enfermedad
                </button>
            </form>
            {error && <p className="mt-4 text-red-600">{error}</p>}
            {success && <p className="mt-4 text-green-600">{success}</p>}
        </div>
    );
}
