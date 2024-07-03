import React, { useState } from 'react';
import axios from 'axios';
import { validateInput } from '../../../../fuctions/Funciones';
import { IoSaveSharp } from "react-icons/io5";

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

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setAlumno((prevAlumno) => ({
            ...prevAlumno,
            EsBecado: value === 'SI',
            IdPadrino: value === 'SI' ? prevAlumno.IdPadrino : '', // Limpia el campo IdPadrino si se selecciona "No"
        }));
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

    return (
        <div className="mx-auto max-w-6xl">
            <form onSubmit={handleSubmit} className="space-y-5 bg-lightTheme-primary dark:bg-darkTheme-formulario p-10 rounded-lg">
                <div className='grid grid-cols-12 gap-5'>
                    <div className="col-span-6">
                        <label htmlFor="Nombre" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Nombre</label>
                        <input type="text" required name="Nombre" value={alumno.Nombre} onChange={handleChange} className={`block w-full rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 dark:bg-darkTheme-input  dark:text-darkTheme-gray focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.Nombre)}`} placeholder="Nombre" />
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="Apellido" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Apellido</label>
                        <input type="text" required name="Apellido" value={alumno.Apellido} onChange={handleChange} className={`block w-full rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed dark:bg-darkTheme-input  dark:text-darkTheme-text disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.Apellido)}`} placeholder="Apellido" />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="Sexo" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Sexo</label>
                        <select id="sexo" required name="IdSexo" value={alumno.IdSexo} onChange={handleChange} className={`block dark:bg-darkTheme-input  dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed dark: disabled:bg-gray-50 ${validateInput(alumno.IdSexo)}`}>
                            <option value="">Seleccione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="Rol" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Cargo</label>
                        <select id="Rol" value="Estudiante" disabled className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 dark:bg-darkTheme-input dark:border-darkTheme-opacidad dark:text-darkTheme-gray ${validateInput(alumno.IdRole)}`}>
                            <option value="Estudiante">Estudiante</option>
                        </select>
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="Encargado" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Encargado</label>
                        <input type="text" required name="IdEncargado" value={alumno.IdEncargado} onChange={handleChange} className={`block w-full rounded-md shadow-sm dark:bg-darkTheme-input  dark:text-darkTheme-gray focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.IdEncargado)}`} placeholder="Encargado" />
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="Enfermedad" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Enfermedad</label>
                        <input type="text" name="IdEnfermedad" value={alumno.IdEnfermedad} onChange={handleChange} className={`block w-full dark:bg-darkTheme-input  dark:text-darkTheme-gray rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.IdEnfermedad)}`} placeholder="Enfermedad" />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="IdTipoDocumento" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Tipo Documento</label>
                        <select id="sexo" required name="IdTipoDocumento" value={alumno.IdTipoDocumento} onChange={handleChange} className={`block cursor-pointer dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 ${validateInput(alumno.IdTipoDocumento)}`}>
                            <option value="">Seleccione</option>
                            <option value="NIE">NIE</option>
                            <option value="NIT">NIT</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="NumDocumento" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Número de Documento</label>
                        <input type="number" maxLength={12} required name="NumDocumento" value={alumno.NumDocumento} onChange={handleChange} className={`block dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.NumDocumento)}`} placeholder="12345678" />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="IdGrado" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Grado</label>
                        <select id="Grado" required name="IdGrado" value={alumno.IdGrado} onChange={handleChange} className={`block cursor-pointer dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 ${validateInput(alumno.IdGrado)}`}>
                            <option value="">Seleccione</option>
                            <option value="Primer Grado">Primer Grado</option>
                            <option value="Segundo Grado">Segundo Grado</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="IdTurno" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Turno</label>
                        <select id="Turno" required name="IdTurno" value={alumno.IdTurno} onChange={handleChange} className={`block cursor-pointer dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 ${validateInput(alumno.IdTurno)}`}>
                            <option value="">Seleccione</option>
                            <option value="Mañana">Mañana</option>
                            <option value="Tarde">Tarde</option>
                        </select>
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="Administrador" className="mb-1 block  text-base font-medium text-gray-700 dark:text-gray-400">Administrador</label>
                        <input type="text" required name="IdAdministrador" value={alumno.IdAdministrador} onChange={handleChange} className={`block dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.IdAdministrador)}`} placeholder="Administrador" />
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="EsBecado" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">¿Es Becado?</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="EsBecado" value="SI" checked={alumno.EsBecado === true} onChange={handleRadioChange} />
                                <span className='dark:text-darkTheme-gray'>Sí</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="EsBecado" value="NO" checked={alumno.EsBecado === false} onChange={handleRadioChange} />
                                <span className='text-darkTheme-gray'>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="Padrino" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Padrino</label>
                        <input type="text" name="IdPadrino" value={alumno.IdPadrino} onChange={handleChange} disabled={!alumno.EsBecado} className={`block dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${alumno.EsBecado ? 'bg-white' : 'bg-gray-50 cursor-not-allowed text-gray-500'}`} placeholder="Padrino" />
                    </div>
                </div>
                {/* <div className="flex justify-center gap-2">
                    <div className='flex-1'>
                        <button type="button" className="flex items-center justify-center gap-2 rounded-lg w-full border border-violet-500 bg-violet-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300">
                            <IoSaveSharp className='text-3xl text-white' /> 
                            Registrar
                        </button>
                    </div>
                </div> */}
            </form>
        </div>
    );
}

