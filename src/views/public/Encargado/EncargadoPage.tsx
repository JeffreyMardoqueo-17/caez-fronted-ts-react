import React, { useEffect, useState } from 'react';
import { Table } from '../../../components/Table/Table';
import { Encargado } from '../../../interfaces/TablasBD';
import { FaDownload, FaUserPlus } from "react-icons/fa";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { CustomTypography } from '../../../components/Forms/CustomTypography';
import { Modal } from '../../../components/modales/Modal';
import { getEncargados, filtrarEncargados } from '../../../utils/Encargado';

const EncargadoPage = () => {
    const [encargados, setEncargados] = useState<Encargado[]>([]);
    const [tablaEncargados, setTablaEncargados] = useState<Encargado[]>([]);
    const [busqueda, setBusqueda] = useState<string>("");
    const [selectedEncargado, setSelectedEncargado] = useState<Encargado | null>(null);
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

    // Función para obtener los encargados utilizando el servicio
    const cargarEncargados = async () => {
        try {
            const datosEncargados = await getEncargados();
            setEncargados(datosEncargados);
            setTablaEncargados(datosEncargados);
        } catch (error) {
            console.error('Error al cargar los encargados:', error);
        }
    };

    // Llama a cargarEncargados al cargar el componente
    useEffect(() => {
        cargarEncargados();
    }, []);

    // Maneja el cambio en el input de búsqueda
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value);
        const resultadosBusqueda = filtrarEncargados(tablaEncargados, e.target.value);
        setEncargados(resultadosBusqueda);
    };

    // Cierra el modal de detalles del encargado
    const handleCloseModal = () => {
        setSelectedEncargado(null);
    };

    // Abre el modal para crear un nuevo encargado
    const handleOpenCreateModal = () => {
        setShowCreateModal(true);
    };

    // Cabecera de la tabla
    const tableHead = ["Nombre", "Apellido", "Teléfono", "Dirección", "Correo", "DUI", "Acciones"];

    // Filas de la tabla con acciones (botones)
    const tableRows = encargados.map(encargado => ({
        Nombre: encargado.Nombre,
        Apellido: encargado.Apellido,
        Teléfono: encargado.Telefono,
        Dirección: encargado.Direccion,
        Correo: encargado.Correo,
        DUI: encargado.NumDocumento,
        Acciones: [
            { icon: <FaEye />, onClick: () => handleVerMas(encargado) },
            { icon: <FaEdit />, onClick: () => handleEdit(encargado) },
            { icon: <FaTrash />, onClick: () => handleEliminar(encargado) }
        ]
    }));

    // Maneja el clic en "Editar" (acción ficticia)
    const handleEdit = (encargado: Encargado) => {
        console.log("Editar:", encargado);
        // Aquí puedes agregar la lógica para editar el encargado
    };

    // Maneja el clic en "Ver más"
    const handleVerMas = (encargado: Encargado) => {
        console.log("Ver más", encargado);
        // Aquí puedes agregar la lógica para ver más detalles del encargado
    };

    // Maneja el clic en "Eliminar"
    const handleEliminar = (encargado: Encargado) => {
        console.log("Eliminar", encargado);
        // Aquí puedes agregar la lógica para eliminar el encargado
    };

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
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
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
                    color=''
                    fontBold="font-bold"
                    fontSize="text-3xl"
                    className="text-darkTheme-background mb-7 dark:text-lightTheme-background"
                >
                    Listado de Encargados
                </CustomTypography>
                <div className="mt-7">
                    <Table tableHead={tableHead} tableRows={tableRows} />
                </div>
            </div>
            {selectedEncargado && (
                <Modal
                    showModal={true}
                    setShowModal={handleCloseModal}
                    title={`${selectedEncargado.Nombre} ${selectedEncargado.Apellido}`}
                    body={<EncargadoForm encargado={selectedEncargado} />}
                    confirmText="Aceptar"
                    cancelText="Cancelar"
                    onConfirm={handleCloseModal}
                />
            )}
            {showCreateModal && (
                <Modal
                    showModal={true}
                    setShowModal={setShowCreateModal}
                    title="Crear Encargado"
                    body={<EncargadoCreate />}
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

export default EncargadoPage;
