import React, { useState, useEffect } from 'react';
import { Padrino, Sexo, Role, Direccion, User } from '../../../interfaces/TablasBD';
import { getSexos } from '../../../utils/Sexo';
import { getRoles } from '../../../utils/Roles';
import { createPadrino } from '../../../utils/Padrino';
import { validateInput } from '../../../fuctions/Funciones';
import { getDirecciones } from '../../../utils/Direccion';
import { getAdministradores } from '../../../utils/Administrador';

export default function PadrinoCreate() {
    const [padrino, setPadrino] = useState<Omit<Padrino, 'Id' | 'FechaRegistro'>>({
        Nombre: '',
        Apellido: '',
        IdSexo: '',
        IdRole: '',
        Telefono: '',
        Correo: '',
        IdDireccion: '',
        IdAdministrador: '',
    });

    //PARA OBTENER LOS SEXOS DE LA BASE DE DATOS
    const [sexos, setSexos] = useState<Sexo[]>([]);
    useEffect(() => {
        const fetchSexos = async () => {
            try {
                const data = await getSexos();
                setSexos(data);
            } catch (error) {
                console.error('Error al obtener los sexos:', error);
            }
        };
        fetchSexos();
    }, []);

    //PARA OBTENER LOS rOLES DE LA BASE DE DATOS
    const [roles, setRoles] = useState<Role[]>([]);
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const data = await getRoles();
                setRoles(data);
            } catch (error) {
                console.error('Error al obtener los roles:', error);
            }
        };
        fetchRoles();
    }, []);

    //para obtener las direcciones
    const [direcciones, setDirecciones] = useState<Direccion[]>([]);
    useEffect(() => {
        const fetchDirecciones = async () => {
            try {
                const data = await getDirecciones();
                setDirecciones(data);
            } catch (error) {
                console.error(' Error al obtener las direcciones:', error);
            }
        }
        fetchDirecciones();
    });

    //para obtener a los administradores
    const [administradores, setAdministradores] = useState<User[]>([]);
    useEffect(() => {
        const fetchAdministradores = async () => {
            try {
                const data = await getAdministradores();
                setAdministradores(data);
            } catch (error) {
                console.error('Error al obtener los administradores:', error);
            }
        };
        fetchAdministradores();
    }, []);

    const procesarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPadrino({
            ...padrino,
            [name]: value,
        });
    };

    const CrearPadrino = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createPadrino(padrino);
            alert('Padrino creado exitosamente');
        } catch (error) {
            console.error('Error al crear el padrino:', error);
            alert('Error al crear el padrino');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Crear Padrino</h2>
            <form onSubmit={CrearPadrino}>
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label htmlFor="Nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Nombre</label>
                        <input
                            type="text"
                            name="Nombre"
                            id="Nombre"
                            value={padrino.Nombre}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed dark: disabled:bg-gray-50 ${validateInput(padrino.Nombre)}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="Apellido" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Apellido</label>
                        <input
                            type="text"
                            name="Apellido"
                            id="Apellido"
                            value={padrino.Apellido}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed dark: disabled:bg-gray-50 ${validateInput(padrino.Apellido)}`}
                        />
                    </div>
                    <div>
                        <label htmlFor="IdSexo" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Sexo</label>
                        <select
                            name="IdSexo"
                            id="IdSexo"
                            value={padrino.IdSexo}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed dark: disabled:bg-gray-50 ${validateInput(padrino.IdSexo)}`}
                        >
                            <option value="">Seleccione</option>
                            {sexos.map((sexo) => (
                                <option key={sexo.Id} value={sexo.Id}>{sexo.Nombre}</option>
                            ))}
                        </select>
                    </div>
                    {/* conbobox de los roles */}
                    <div>
                        <label htmlFor="IdRole" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Rol - Cargo</label>
                        <select
                            name="IdRole"
                            id="IdRole"
                            value={padrino.IdRole}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed dark: disabled:bg-gray-50 ${validateInput(padrino.IdRole)}`}
                        >
                            <option value="">Seleccione</option>
                            {roles.map((role) => (
                                <option key={role.Id} value={role.Id}>{role.Name}</option>
                            ))}
                        </select>
                    </div>
                    {/* conbobox de la direccion */}
                    <div>
                        <label htmlFor="IdDireccion" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Direcciones</label>
                        <select
                            name="IdDireccion"
                            id="IdDireccion"
                            value={padrino.IdDireccion}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed dark: disabled:bg-gray-50 ${validateInput(padrino.IdDireccion)}`}
                        >
                            <option value="">Seleccione</option>
                            {direcciones.map((direccion) => (
                                <option key={direccion.Id} value={direccion.Id}>{direccion.Nombre}</option>
                            ))}
                        </select>
                    </div>
                    {/* conbobox de los administradores */}
                    <div>
                        <label htmlFor="IdAdministradores" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Administradores</label>
                        <select
                            name="IdAdministradores"
                            id="IdAdministradores"
                            value={padrino.IdAdministrador}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed dark: disabled:bg-gray-50 ${validateInput(padrino.IdAdministrador)}`}
                        >
                            <option value="">Seleccione</option>
                            {administradores.map((administrador) => (
                                <option key={administrador.Id} value={administrador.Id}>{administrador.Name}{administrador.LastName}</option>
                            ))}
                        </select>
                    </div>
                    {/* Agregar aquí los demás campos como Role, Telefono, etc. */}
                    <div>
                        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Crear Padrino</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
