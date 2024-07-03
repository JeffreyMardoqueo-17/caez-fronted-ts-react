// AlumnoCreate.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetTiposDocumento from '../../../../fuctions/GetsTipoDocumentos';
import { TipoDocumento } from '../../../../interfaces/TablasBD';

export default function AlumnoCreate() {
    const [alumno, setAlumno] = useState({
        Nombre: '',
        Apellido: '',
        FechaNacimiento: '',
        IdSexo: '',
        IdRole: '',
        IdEncargado: '',
        IdEnfermedad: '',
        IdTipoDocumento: '',
        NumDocumento: '',
        IdGrado: '',
        IdGrupo: '',
        IdTurno: '',
        IdAdministrador: '',
        IdPadrino: '',
        EsBecado: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setAlumno({
            ...alumno,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/alumnos', alumno);
            alert('Alumno registrado con éxito');
        } catch (error) {
            console.error('Hubo un error al registrar el alumno:', error);
            alert('Error al registrar el alumno');
        }
    };

    const [tiposDocumento, setTiposDocumento] = useState<TipoDocumento[]>([]);

    useEffect(() => {
        async function getTiposDocumento() {
            const data = await GetTiposDocumento();
            setTiposDocumento(data);
        }
        getTiposDocumento();
    }, []);

    return (
        <div className="mx-auto max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-5 bg-lightTheme-primary p-10 rounded-lg shadow-md">
                <div className='grid grid-cols-12 gap-5'>
                    <div className="col-span-6">
                        <label htmlFor="Nombre" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Nombre</label>
                        <input type="text" name="Nombre" value={alumno.Nombre} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Nombre" />
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="Apellido" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Apellido</label>
                        <input type="text" name="Apellido" value={alumno.Apellido} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Apellido" />
                    </div>
                    <div className="col-span-4">
                        <label htmlFor="Sexo" className="mb-1 block text-sm font-medium text-gray-700">Sexo</label>
                        <select id="Sexo" name="IdSexo" value={alumno.IdSexo} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50">
                            <option value="">Choose</option>
                            {tiposDocumento.map((tipo) => (
                                <option key={tipo.id} value={tipo.id}>
                                    {tipo.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit">Registrar Alumno</button>
            </form>
        </div>
    );
}
