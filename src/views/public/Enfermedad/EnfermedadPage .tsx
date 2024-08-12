import React, { useEffect, useState } from 'react';
import { FaDownload, FaUserPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Table } from '../../../components/Table/Table';
import { CustomTypography } from '../../../components/Forms/CustomTypography';
import { Modal } from '../../../components/modales/Modal';
import EnfermedadCreate from './EnfermedadCreate';
import { Enfermedad } from '../../../interfaces/TablasBD';
import { getEnfermedades, filtrarEnfermedades } from '../../../utils/Enfermedad';

const EnfermedadPage: React.FC = () => {
    const [enfermedades, setEnfermedades] = useState<Enfermedad[]>([]);
    const [tablaEnfermedades, setTablaEnfermedades] = useState<Enfermedad[]>([]);
    const [busqueda, setBusqueda] = useState("");
    const [selectedEnfermedad, setSelectedEnfermedad] = useState<Enfermedad | null>(null);
    const [showCreateModal, setShowCreateModal] = useState(false);

    //llamo  a la funcion de obtencion de enfermedades
    const cargarEnfermedades = async () => {
        try {
            const enfermedades = await getEnfermedades();
            setEnfermedades(enfermedades);
            setTablaEnfermedades(enfermedades);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };
    //esto cargao o hace la peticion de las enfermedades
    useEffect(() => {
        cargarEnfermedades();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value);
        const resultadosBusqueda = filtrarEnfermedades(tablaEnfermedades, e.target.value);
        setEnfermedades(resultadosBusqueda);
    };

    const handleCloseModal = () => {
        setSelectedEnfermedad(null);
    };

    const handleOpenCreateModal = () => {
        setShowCreateModal(true);
    };

    const tableHead = ["Nombre", "Descripción", "Acciones"];

    const tableRows = enfermedades.map(enfermedad => ({
        Nombre: enfermedad.Nombre,
        Descripcion: enfermedad.Descripcion,
        Acciones: [
            {
                label: 'Editar',
                onClick: () => handleEdit(enfermedad),
                icon: <FaEdit />,
            },
            {
                label: 'Ver más',
                onClick: () => handleVerMas(enfermedad),
                icon: <FaEye />,
            },
            {
                label: 'Eliminar',
                onClick: () => handleEliminar(enfermedad),
                icon: <FaTrash />,
            }
        ]
    }));

    const handleEdit = (enfermedad: Enfermedad) => {
        console.log("Editar:", enfermedad);
    };

    const handleVerMas = (enfermedad: Enfermedad) => {
        setSelectedEnfermedad(enfermedad);
    };

    const handleEliminar = (enfermedad: Enfermedad) => {
        console.log("Eliminar", enfermedad);
    };

    return (
        <div className="p-4 h-full flex flex-col">
            <div className='top-1 bg-lightTheme-primary dark:bg-darkTheme-background w-full h-auto mb-1 p-4'>
                <form className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-grow mb-4 md:mb-0 md:mr-2">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                                id="default-search"
                                className="block w-full py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                                placeholder="Buscar por nombre o descripción"
                                required
                                value={busqueda}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <button type="button" className="flex items-center justify-center w-full md:w-auto rounded-lg border border-violet-500 bg-violet-500 px-5 py-2.5 text-center text-base font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300" onClick={handleOpenCreateModal}>
                            <FaUserPlus className='text-2xl' />
                            <span>Agregar</span>
                        </button>
                        <button type="button" className="flex items-center justify-center w-full md:w-auto rounded-lg border border-violet-500 bg-violet-500 px-5 py-2.5 text-center text-base font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300">
                            <FaDownload className='text-2xl' />
                            <span>Informe</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-white dark:bg-darkTheme-background rounded-lg shadow overflow-auto flex-grow p-3 mt-4 md:mt-7">
                <CustomTypography
                    color=''
                    fontBold="font-bold"
                    fontSize="text-3xl"
                    className="text-darkTheme-background mb-7 dark:text-lightTheme-background"
                >
                    Listado de Enfermedades
                </CustomTypography>
                <div className="mt-7">
                    <Table tableHead={tableHead} tableRows={tableRows} />
                </div>
            </div>
            {selectedEnfermedad && (
                <Modal
                    showModal={true}
                    setShowModal={handleCloseModal}
                    title={selectedEnfermedad.Nombre}
                    body={<div>{selectedEnfermedad.Descripcion}</div>}
                    confirmText="Aceptar"
                    cancelText="Cancelar"
                    onConfirm={handleCloseModal}
                />
            )}
            {showCreateModal && (
                <Modal
                    showModal={true}
                    setShowModal={setShowCreateModal}
                    title="Crear Enfermedad"
                    body={<EnfermedadCreate />}
                    confirmText="Guardar"
                    cancelText="Cancelar"
                    onConfirm={() => {
                        setShowCreateModal(false);
                        cargarEnfermedades(); // Recargar las enfermedades después de crear una nueva
                    }}
                />
            )}
        </div>
    );
}

export default EnfermedadPage;
