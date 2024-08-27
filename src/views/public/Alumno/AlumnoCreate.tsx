import React, { useEffect, useState } from 'react'
import { Alumno, Encargado, Enfermedad, Grado, Padrino, Role, Sexo, TipoDocumento, Turno, User } from '../../../interfaces/TablasBD'
import { getSexos } from '../../../utils/Sexo';
import { getRoles } from '../../../utils/Roles';
import { getEncargados } from '../../../utils/Encargado';
import { getEnfermedades } from '../../../utils/Enfermedad';
import GetTiposDocumento from '../../../utils/TipoDocumento';
import getGrados from '../../../utils/Grado';
import getTurno from '../../../utils/Turno';
import { getAdministradores } from '../../../utils/Administrador';
import { getPadrinos } from '../../../utils/Padrino';
import { createAlumno } from '../../../utils/Alumno';
import { validateInput } from '../../../fuctions/Funciones';

export default function AlumnoCreate() {

    const [alumno, setAlumno] = useState<Omit<Alumno, 'Id' | 'FechaRegistro'>>({
        Nombre: '',
        Apellido: '',
        FechaNacimiento: '',
        Sexo: '',
        Role: '',
        Encargado: '',
        Enfermedad: '',
        TipoDocumento: '',
        NumDocumento: '',
        Grado: '',
        Turno: '',
        Administrador: '',
        Padrino: '',
        EsBecado: false
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
    //para obtener los encargados de la base de datos
    const [encargados, setEncargados] = useState<Encargado[]>([]);
    useEffect(() => {
        const fetchEncargados = async () => {
            try {
                const data = await getEncargados();
                setEncargados(data);
                setEncargados(data);
            } catch (error) {
                console.error('Error al obtener los encargados:', error);
            }
        }
    })
    // para onteer las enferedad des la base de datoss
    const [enfermedad, setEnfermedad] = useState<Enfermedad[]>([]);
    useEffect(() => {
        const fetchEnfermedad = async () => {
            try {
                const data = await getEnfermedades();
                setEnfermedad(data);
            } catch (error) {
                console.error('Error al obtener las enfermedades:', error);
            }
        };
    }, [])
    // para obtener los tipos de documento de la base de datos
    const [tipoDocumento, setTipoDocumento] = useState<TipoDocumento[]>([]);
    useEffect(() => {
        const fetchTipoDocumento = async () => {
            try {
                const data = await GetTiposDocumento();
                setTipoDocumento(data);
            } catch (error) {
                console.error('Error al obtener los tipos de documento:', error);
            }
        };
        fetchTipoDocumento();
    }, []);

    //para obtener los grados de la base de datos
    const [grado, setGrado] = useState<Grado[]>([]);
    useEffect(() => {
        const fetchGrado = async () => {
            try {
                const data = await getGrados();
                setGrado(data);
            } catch (error) {
                console.error('Error al obtener los tipos de documento:', error);
            }
        };
        fetchGrado();
    }, []);

    // para obtener los turnos
    const [turno, setTurno] = useState<Turno[]>([]);
    useEffect(() => {
        const fetchTurno = async () => {
            try {
                const data = await getTurno();
                setTurno(data);
            } catch (error) {
                console.error('Error al obtener los turnos:', error);
            }
        };
        fetchTurno();
    }, [])

    //para obtener a los administradores
    const [administradores, setAdministradores] = useState<User[]>([]);
    useEffect(() => {
        const fetchAdministradores = async () => {
            try {
                const data = await getAdministradores();
                console.log("Administradores recibidos:", data);
                setAdministradores(data);
            } catch (error) {
                console.error('Error al obtener los administradores:', error);
            }
        };
        fetchAdministradores();
    }, []); // Dependencias vacías aseguran que se ejecute solo una vez

    const [padrino, setPadrino] = useState<Padrino[]>([]);
    useEffect(() => {
        const fetchPadrino = async () => {
            try {
                const data = await getPadrinos();
                setPadrino(data);
            } catch (error) {
                console.error('Error al obtener los padrinos:', error);
            }
        };
        fetchPadrino();
    }, [])

    //para que ponga en el inputs el dato que quiera el susaurio y se procese el cambio
    const procesarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAlumno({
            ...alumno,
            [name]: value,
        });
    };

    //lo que le pasare al formulario para que cree un padrino, usando la funcion de crear padrino
    const crearAlumno = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createAlumno(alumno);
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
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Nombre)}`}
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
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Apellido)}`}
                        />
                    </div>
                    {/* fecha de naciemiento */}

                    {/* Sexo */}
                    <div>
                        <label htmlFor="Sexo" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Sexo</label>
                        <select
                            name="Sexo"
                            id="Sexo"
                            value={alumno.Sexo}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Sexo)}`}
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
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Role)}`}
                        >
                            <option value="">Seleccione</option>
                            {roles.map((role) => (
                                <option key={role.Id} value={role.Id}>{role.Name}</option>
                            ))}
                        </select>
                    </div>
                    {/* Encargados  */}
                    <div>
                        <label htmlFor="Encargado" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Encargado</label>
                        <select
                            name="Encargado"
                            id="Encargado"
                            value={alumno.Encargado}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Encargado)}`}
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
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Enfermedad ?? '')}`}
                        >
                            <option value="">Seleccione</option>
                            {enfermedad.map((enferedad) => (
                                <option key={enferedad.Id} value={enferedad.Id}>{enferedad.Nombre}</option>
                            ))}
                        </select>
                    </div>
                    {/* Tipo de Documento */}
                    <div>
                        <label htmlFor="TipoDocumento" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Tipo Doocumento</label>
                        <select
                            name="TipoDocumento"
                            id="TipoDocumento"
                            value={alumno.TipoDocumento}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.TipoDocumento)}`}
                        >
                            <option value="">Seleccione</option>
                            {tipoDocumento.map((tipoDocumento) => (
                                <option key={tipoDocumento.id} value={tipoDocumento.id}>{tipoDocumento.name}</option>
                            ))}
                        </select>
                    </div>
                    {/* nUMERO DE DOCUMENTO */}
                    <div>
                        <label htmlFor="NumDocumento" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Numero de Documento</label>
                        <input
                            type="text"
                            name="NumDocumento"
                            id="NumDocumento"
                            value={alumno.NumDocumento}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.NumDocumento)}`}
                        />
                    </div>
                    {/* GRADO */}
                    <div>
                        <label htmlFor="Grado" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Grados</label>
                        <select
                            name="Grado"
                            id="Grado"
                            value={alumno.Grado}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Grado)}`}
                        >
                            <option value="">Seleccione</option>
                            {grado.map((grado) => (
                                <option key={grado.Id} value={grado.Id}>{grado.Nombre}</option>
                            ))}
                        </select>
                    </div>
                    {/* <TURNOS></TURNOS> */}
                    <div>
                        <label htmlFor="Turno" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Turnos</label>
                        <select
                            name="Turno"
                            id="Turno"
                            value={alumno.Turno}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Turno)}`}
                        >
                            <option value="">Seleccione</option>
                            {turno.map((turno) => (
                                <option key={turno.Id} value={turno.Id}>{turno.Nombre}</option>
                            ))}
                        </select>
                    </div>
                    {/* <PADRINOSSSS></PADRINOSSSS> */}
                    <div>
                        <label htmlFor="Padrino" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Padrino</label>
                        <select
                            name="Padrino"
                            id="Padrino"
                            value={alumno.Padrino ?? ''}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Padrino ?? '')}`}
                        >
                            <option value="">Seleccione</option>
                            {padrino.map((padrino) => (
                                <option key={padrino.Id} value={padrino.Id}>{padrino.Nombre}{padrino.Apellido}</option>
                            ))}
                        </select>
                    </div>

                    {/* ADMINISTRADOR */}
                    <div>
                        <label htmlFor="IdAdministrador" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Administrador</label>
                        <select
                            name="IdAdministrador"
                            id="IdAdministrador"
                            value={alumno.Administrador}
                            onChange={procesarCambio}
                            required
                            className={`block dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${validateInput(alumno.Administrador)}`}
                        >
                            <option value="">Seleccione</option>
                            {administradores.map(administrador => (
                                <option key={administrador.Id} value={administrador.Id}>
                                    {administrador.Name} {administrador.LastName}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Crear Alumno
                </button>
            </form>
        </div>
    )
}
