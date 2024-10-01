import React, { useEffect, useState } from 'react';
import { Alumno, Encargado, Enfermedad, Grado, Padrino, Role, Sexo, Turno, User } from '../../../interfaces/TablasBD';
import { getSexos } from '../../../utils/Sexo';
import { getRoles } from '../../../utils/Roles';
import { getEncargados } from '../../../utils/Encargado';
import { getEnfermedades } from '../../../utils/Enfermedad';
import getGrados from '../../../utils/Grado';
import getTurno from '../../../utils/Turno';
import { getAdministradores } from '../../../utils/Administrador';
import { getPadrinos } from '../../../utils/Padrino';
import { createAlumno } from '../../../utils/Alumno';

export default function AlumnoCreate() {
    const [alumno, setAlumno] = useState<Omit<Alumno, 'Id' | 'FechaRegistro'>>({
        Nombre: '',
        Apellido: '',
        FechaNacimiento: '',
        Sexo: '',
        Role: '',
        Encargado: '',
        Enfermedad: '',
        TipoDocumento: '2',  // Establecemos el TipoDocumento a NIE automáticamente (Id: 2)
        NumDocumento: '',
        Grado: '',
        Turno: '',
        Administrador: '',
        Padrino: '',
        EsBecado: false
    });

    const [mostrarPadrino, setMostrarPadrino] = useState(false);

    const handleEsBecadoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setMostrarPadrino(isChecked);
        setAlumno({
            ...alumno,
            EsBecado: isChecked,
            Padrino: isChecked ? alumno.Padrino : ''
        });
    };

    const [sexos, setSexos] = useState<Sexo[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const [encargados, setEncargados] = useState<Encargado[]>([]);
    const [padrinos, setPadrinos] = useState<Padrino[]>([]);
    const [enfermedades, setEnfermedades] = useState<Enfermedad[]>([]);
    const [grados, setGrados] = useState<Grado[]>([]);
    const [turnos, setTurnos] = useState<Turno[]>([]);
    const [administradores, setAdministradores] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setSexos(await getSexos());
                setRoles(await getRoles());
                setEncargados(await getEncargados());
                setPadrinos(await getPadrinos());
                setEnfermedades(await getEnfermedades());
                setGrados(await getGrados());
                setTurnos(await getTurno());
                setAdministradores(await getAdministradores());
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        fetchData();
    }, []);

    const procesarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAlumno({
            ...alumno,
            [name]: value,
        });
    };

    const crearAlumno = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createAlumno(alumno); // Enviamos directamente el objeto `alumno` sin convertir los ids
            alert('Alumno creado exitosamente');
        } catch (error) {
            console.error('Error al crear el Alumno:', error);
            alert('Error al crear el Alumno');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-1 sm:p-6 bg-white dark:bg-darkTheme-formulario rounded-md">
            <form onSubmit={crearAlumno} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="Nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Nombre</label>
                        <input
                            type="text"
                            name="Nombre"
                            id="Nombre"
                            value={alumno.Nombre}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        />
                    </div>

                    {/* Apellido */}
                    <div>
                        <label htmlFor="Apellido" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Apellido</label>
                        <input
                            type="text"
                            name="Apellido"
                            id="Apellido"
                            value={alumno.Apellido}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        />
                    </div>

                    {/* Fecha de Nacimiento */}
                    <div>
                        <label htmlFor="FechaNacimiento" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            name="FechaNacimiento"
                            id="FechaNacimiento"
                            value={alumno.FechaNacimiento}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        />
                    </div>

                    {/* Sexo */}
                    <div>
                        <label htmlFor="Sexo" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Sexo</label>
                        <select
                            name="Sexo"
                            id="Sexo"
                            value={alumno.Sexo}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        >
                            <option value="">Seleccione</option>
                            {sexos.map((sexo) => (
                                <option key={sexo.Id} value={sexo.Id}>{sexo.Nombre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Roles */}
                    <div>
                        <label htmlFor="Role" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Rol - Cargo</label>
                        <select
                            name="Role"
                            id="Role"
                            value={alumno.Role}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        >
                            <option value="">Seleccione</option>
                            {roles.map((role) => (
                                <option key={role.Id} value={role.Id}>{role.Name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Checkbox de Es Becado */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            <input
                                type="checkbox"
                                checked={alumno.EsBecado}
                                onChange={handleEsBecadoChange}
                                className="mr-2"
                            />
                            ¿Es Becado?
                        </label>
                    </div>

                    {/* Padrino */}
                    {mostrarPadrino && (
                        <div>
                            <label htmlFor="Padrino" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Padrino</label>
                            <select
                                name="Padrino"
                                id="Padrino"
                                value={alumno.Padrino ?? ''}
                                onChange={procesarCambio}
                                required={mostrarPadrino}
                                className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                            >
                                <option value="">Seleccione</option>
                                {padrinos.map((padrino) => (
                                    <option key={padrino.Id} value={padrino.Id}>{padrino.Nombre} {padrino.Apellido}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Encargado */}
                    <div>
                        <label htmlFor="Encargado" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Encargado</label>
                        <select
                            name="Encargado"
                            id="Encargado"
                            value={alumno.Encargado}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        >
                            <option value="">Seleccione</option>
                            {encargados.map((encargado) => (
                                <option key={encargado.Id} value={encargado.Id}>{encargado.Nombre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Enfermedad */}
                    <div>
                        <label htmlFor="Enfermedad" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Enfermedad</label>
                        <select
                            name="Enfermedad"
                            id="Enfermedad"
                            value={alumno.Enfermedad ?? ''}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        >
                            <option value="">Seleccione</option>
                            {enfermedades.map((enfermedad) => (
                                <option key={enfermedad.Id} value={enfermedad.Id}>{enfermedad.Nombre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Tipo de Documento (Preestablecido como NIE) */}
                    <div>
                        <label htmlFor="TipoDocumento" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Tipo Documento</label>
                        <input
                            type="text"
                            name="TipoDocumento"
                            id="TipoDocumento"
                            value="NIE"  // Muestra NIE y lo preestablece
                            readOnly
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        />
                    </div>

                    {/* Número de Documento */}
                    <div>
                        <label htmlFor="NumDocumento" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Número de Documento</label>
                        <input
                            type="text"
                            name="NumDocumento"
                            id="NumDocumento"
                            value={alumno.NumDocumento}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        />
                    </div>

                    {/* Grado */}
                    <div>
                        <label htmlFor="Grado" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Grado</label>
                        <select
                            name="Grado"
                            id="Grado"
                            value={alumno.Grado}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        >
                            <option value="">Seleccione</option>
                            {grados.map((grado) => (
                                <option key={grado.Id} value={grado.Id}>{grado.Nombre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Turno */}
                    <div>
                        <label htmlFor="Turno" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Turno</label>
                        <select
                            name="Turno"
                            id="Turno"
                            value={alumno.Turno}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        >
                            <option value="">Seleccione</option>
                            {turnos.map((turno) => (
                                <option key={turno.Id} value={turno.Id}>{turno.Nombre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Administrador */}
                    <div>
                        <label htmlFor="Administrador" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Administrador</label>
                        <select
                            name="Administrador"
                            id="Administrador"
                            value={alumno.Administrador}
                            onChange={procesarCambio}
                            required
                            className="block dark:bg-darkTheme-input dark:text-darkTheme-gray w-full rounded-md shadow-sm"
                        >
                            <option value="">Seleccione</option>
                            {administradores.map((admin) => (
                                <option key={admin.Id} value={admin.Id}>{admin.Name} {admin.LastName}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Botón para crear alumno */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Crear Alumno
                </button>
            </form>
        </div>
    );
}
