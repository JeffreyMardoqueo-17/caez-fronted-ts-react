import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from '../../../Table/Table';
import { Alumno } from '../../../../interfaces/TablasBD';
import { FaDownload, FaUserPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { CustomTypography } from '../../../Forms/CustomTypography';
import { Modal } from '../../../modales/Modal';
import AlumnoCreate from './AlumnoCreate';
import { AlumnoForm } from '../../../Forms/AlumnoForm/AlumnoForm';
import { ActionButton } from '../../../inputs/Buttoom/ActionButton';

const AlumnosPage = () => {
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    const [tablaAlumnos, setTablaAlumnos] = useState<Alumno[]>([]);
    const [busqueda, setBusqueda] = useState<string>("");
    const [selectedAlumno, setSelectedAlumno] = useState<Alumno | null>(null);
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

    // Función para obtener a los alumnos
    const getAlumnos = async () => {
        try {
            const url = 'http://localhost:3000/Alumnos';
            const respuesta = await axios.get<Alumno[]>(url);
            setAlumnos(respuesta.data);
            setTablaAlumnos(respuesta.data);
            console.log('Datos recibidos:', respuesta.data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    // Llama a getAlumnos al cargar el componente
    useEffect(() => {
        getAlumnos();
    }, []);

    // Maneja el cambio en el input de busquedaa :)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
        console.log("Búsqueda", e.target.value);
    };

    // Filtra los alumnos segun lo que se escriba en el input (Busqueda)
    const filtrar = (terminoBusqueda: string) => {
        const resultadosBusqueda = tablaAlumnos.filter((elemento) => {
            return (
                elemento.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.Apellido.toLowerCase().includes(terminoBusqueda.toLowerCase())
            );
        });
        setAlumnos(resultadosBusqueda);
    };

    // Cierra el modal de detalles del alumno
    const handleCloseModal = () => {
        setSelectedAlumno(null);
    };

    // Abre el modal para crear un nuevo alumno
    const handleOpenCreateModal = () => {
        setShowCreateModal(true);
    };

    // Maneja el clic en "Eliminar" (acción ficticia)
    const handleDelete = (alumno: Alumno) => {
        console.log("Eliminar:", alumno);
        // Aquí puedes agregar la lógica para eliminar el alumno
    };

    // Maneja el clic en "Ver más"
    const handleVerMas = (alumno: Alumno) => {
        console.log("Ver más sobre:", alumno);
        // setSelectedAlumno(alumno);
    };

    // Maneja el clic en "Editar" (acción ficticia)
    const handleEdit = (alumno: Alumno) => {
        console.log("Editar:", alumno);
        // Aquí puedes agregar la lógica para editar el alumno
    };

    // Cabecera de la tabla
    const tableHead = ["Nombre", "Apellido", "Encargado", "NIE", "GRADO", "Turno", "Es Becado", "Acciones"];

    // Filas de la tabla con acciones (botones)
    const tableRows = alumnos.map(alumno => [
        alumno.Nombre,
        alumno.Apellido,
        alumno.Encargado,
        alumno.NumDocumento,
        alumno.Grado,
        alumno.Turno,
        alumno.EsBecado ? 'SI' : 'NO',
        [
            { icon: <FaEye />, onClick: () => handleVerMas(alumno) },
            { icon: <FaEdit />, onClick: () => handleEdit(alumno) },
            { icon: <FaTrash />, onClick: () => handleDelete(alumno) }
        ]
    ]);

    return (
        <div className="p-4 h-full flex flex-col">
            <div className='top-1 bg-lightTheme-primary dark:bg-darkTheme-background w-full h-auto mb-1 p-4'>
                <form className="flex justify-between items-center">
                    <div className="relative flex-grow">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="Buscar"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-darkTheme-icono focus:border-darkTheme-icono dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-darkTheme-icono dark:focus:border-darkTheme-icono"
                            placeholder="Buscar por nombre o apellido"
                            required
                            value={busqueda}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex space-x-2 ml-4">
                        <button type="button" className="flex items-center justify-center space-x-2 rounded-lg border border-violet-500 bg-violet-500 px-5 py-2.5 text-center text-base font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300" onClick={handleOpenCreateModal}>
                            <FaUserPlus className='text-2xl' />
                            <span>Agregar</span>
                        </button>
                        <button type="button" className="flex items-center justify-center space-x-2 rounded-lg border border-violet-500 bg-violet-500 px-5 py-2.5 text-center text-base font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300">
                            <FaDownload className='text-2xl' />
                            <span>Informe</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-white dark:bg-darkTheme-background rounded-lg shadow overflow-auto flex-grow p-3">
                <CustomTypography
                    fontBold="font-bold"
                    fontSize="text-3xl"
                    className="text-darkTheme-background mb-7 dark:text-lightTheme-background"
                    color="text-darkTheme-background" // Añade el color adecuado
                >
                    Listado de Alumnos
                </CustomTypography>

                <div className="mt-7">
                    <Table tableHead={tableHead} tableRows={tableRows} />
                </div>
            </div>
            {selectedAlumno && (
                <Modal
                    showModal={true}
                    setShowModal={handleCloseModal}
                    title={`${selectedAlumno.Nombre} ${selectedAlumno.Apellido}`}
                    body={<AlumnoForm alumno={selectedAlumno} />}
                    confirmText="Aceptar"
                    cancelText="Cancelar"
                    onConfirm={handleCloseModal}
                />
            )}
            {showCreateModal && (
                <Modal
                    showModal={true}
                    setShowModal={setShowCreateModal}
                    title="Crear Alumno"
                    body={<AlumnoCreate />}
                    confirmText="Guardar"
                    cancelText="Cancelar"
                    onConfirm={() => {
                        setShowCreateModal(false);
                    }}
                />
            )}
        </div>
    );
}

export default AlumnosPage;