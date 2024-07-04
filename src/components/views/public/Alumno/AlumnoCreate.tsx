import React, { useState, useEffect } from 'react';
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

    const [enfermedades, setEnfermedades] = useState([]);
    const [textoBusqueda, setTextoBusqueda] = useState('');

    const handleChange = async (e) => {
        const { name, value, type, checked } = e.target;
        setAlumno({
            ...alumno,
            [name]: type === 'checkbox' ? checked : value,
        });

        if (name === 'IdEnfermedad') {
            setTextoBusqueda(value);
            if (value) {
                try {
                    const response = await axios.post('http://localhost:5000/enfermedad/Buscar', { textoBusqueda: value });
                    setEnfermedades(response.data);
                } catch (error) {
                    console.error('Error al buscar enfermedades:', error);
                }
            } else {
                setEnfermedades([]);
            }
        }
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setAlumno((prevAlumno) => ({
            ...prevAlumno,
            EsBecado: value === 'SI',
            IdPadrino: value === 'SI' ? prevAlumno.IdPadrino : '', // Limpia el campo IdPadrino si se selecciona "No"
        }));
    };

    const handleSubmit = async (e) => {
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
                        {textoBusqueda && (
                            <ul className="bg-white dark:bg-darkTheme-formulario border border-gray-300 dark:border-gray-700 rounded-md mt-1">
                                {enfermedades.map((enfermedad, index) => (
                                    <li key={index} onClick={() => setAlumno({ ...alumno, IdEnfermedad: enfermedad.Nombre })} className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">{enfermedad.Nombre}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="IdTipoDocumento" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Tipo Documento</label>
                        <select id="IdTipoDocumento" required name="IdTipoDocumento" value={alumno.IdTipoDocumento} onChange={handleChange} className={`block cursor-pointer dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 ${validateInput(alumno.IdTipoDocumento)}`}>
                            <option value="">Seleccione</option>
                            <option value="1">DUI</option>
                            <option value="2">NIE</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="NumDocumento" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Número Documento</label>
                        <input type="text" required name="NumDocumento" value={alumno.NumDocumento} onChange={handleChange} className={`block w-full rounded-md dark:bg-darkTheme-input  dark:text-darkTheme-gray shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.NumDocumento)}`} placeholder="Número de Documento" />
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="IdGrado" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Grado</label>
                        <select id="IdGrado" required name="IdGrado" value={alumno.IdGrado} onChange={handleChange} className={`block cursor-pointer dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 ${validateInput(alumno.IdGrado)}`}>
                            <option value="">Seleccione</option>
                            <option value="1">1er Grado</option>
                            <option value="2">2do Grado</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="IdGrupo" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Grupo</label>
                        <select id="IdGrupo" required name="IdGrupo" value={alumno.IdGrupo} onChange={handleChange} className={`block cursor-pointer dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 ${validateInput(alumno.IdGrupo)}`}>
                            <option value="">Seleccione</option>
                            <option value="1">Grupo A</option>
                            <option value="2">Grupo B</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="IdTurno" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Turno</label>
                        <select id="IdTurno" required name="IdTurno" value={alumno.IdTurno} onChange={handleChange} className={`block cursor-pointer dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 ${validateInput(alumno.IdTurno)}`}>
                            <option value="">Seleccione</option>
                            <option value="1">Mañana</option>
                            <option value="2">Tarde</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="IdAdministrador" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Administrador</label>
                        <input type="text" required name="IdAdministrador" value={alumno.IdAdministrador} onChange={handleChange} className={`block dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.IdAdministrador)}`} placeholder="Administrador" />
                    </div>
                    <div className="col-span-6">
                        <label className="block mb-1 text-base font-medium text-gray-700 dark:text-gray-400">¿Es Becado?</label>
                        <div className="flex space-x-4">
                            <label className="inline-flex items-center">
                                <input type="radio" name="EsBecado" value="SI" checked={alumno.EsBecado === true} onChange={handleRadioChange} className="form-radio" />
                                <span className="ml-2 dark:text-darkTheme-gray">Sí</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" name="EsBecado" value="NO" checked={alumno.EsBecado === false} onChange={handleRadioChange} className="form-radio" />
                                <span className="ml-2 dark:text-darkTheme-gray">No</span>
                            </label>
                        </div>
                    </div>
                    {alumno.EsBecado && (
                        <div className="col-span-6">
                            <label htmlFor="IdPadrino" className="mb-1 block text-base font-medium text-gray-700 dark:text-gray-400">Padrino</label>
                            <input type="text" required={alumno.EsBecado} name="IdPadrino" value={alumno.IdPadrino} onChange={handleChange} className={`block dark:bg-darkTheme-input  dark:text-darkTheme-gray w-full rounded-md shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 ${validateInput(alumno.IdPadrino)}`} placeholder="Padrino" />
                        </div>
                    )}
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="flex items-center bg-primary-500 text-white font-bold py-2 px-4 rounded-md shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-primary-300">
                        <IoSaveSharp className="mr-2" /> Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}