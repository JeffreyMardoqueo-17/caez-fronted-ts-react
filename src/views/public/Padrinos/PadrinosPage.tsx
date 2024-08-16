// import React from 'react'
import { useState, useEffect } from 'react';
import { Padrino } from '../../../interfaces/TablasBD';
import { filtrarPadrinos, getPadrinos } from '../../../utils/Padrino';
import { FaUserPlus, FaDownload, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { CustomTypography } from '../../../components/Forms/CustomTypography';
import { Table } from '../../../components/Table/Table';
import { Modal } from '../../../components/modales/Modal';
import PadrinoCreate from './PadrinoCreate';

export default function PadrinosPage() {
    // Para abrir o cerrar el modal
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

    // Para traer a los padrinos
    const [padrinos, setPadrinos] = useState<Padrino[]>([]);
    const [tablaPadrino, setTablaPadrinos] = useState<Padrino[]>([]);

    useEffect(() => {
        const fetchPadrinos = async () => {
            const padrinosData = await getPadrinos();
            setPadrinos(padrinosData);
            setTablaPadrinos(padrinosData);
        };
        fetchPadrinos();
    }, []);


    // Datos para llenar las tablas, los header y las filas
    const tableHead = ["Nombre", "Apellido", "Telefono", "Correo", "Acciones"];
    const tableRowsPadrinos = padrinos.map(padrino => ({
        Nombre: padrino.Nombre,
        Apellido: padrino.Apellido,
        Telefono: padrino.Telefono,
        Correo: padrino.Correo,
        Acciones: [
            { icon: <FaEye />, onClick: () => handleVerMasPadrino(padrino) },
            { icon: <FaEdit />, onClick: () => handleEditPadrino(padrino) },
            { icon: <FaTrash />, onClick: () => handleDeletePadrino(padrino) }
        ]
    }));
    const handleVerMasPadrino = (padrino: Padrino) => {
        // Lógica para ver más detalles de un padrino
        console.log('Ver más detalles de', padrino);
    };

    const handleEditPadrino = (padrino: Padrino) => {
        // Lógica para editar un padrino
        console.log('Editar', padrino);
    };

    const handleDeletePadrino = (padrino: Padrino) => {
        // Lógica para eliminar un padrino
        console.log('Eliminar', padrino);
    };

    // Para llenar el término de búsqueda
    const [busqueda, setBusqueda] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value);
        const resultadosBusqueda = filtrarPadrinos(tablaPadrino, e.target.value);
        setPadrinos(resultadosBusqueda);
        console.log("Búsqueda", e.target.value);
    };

    const handleOpenCreateModal = () => {
        setShowCreateModal(true);
    };

    const handleCloseCreateModal = () => {
        setShowCreateModal(false);
    };

    return (
        <div className="p-4 h-full flex flex-col">
            <div className="bg-lightTheme-primary dark:bg-darkTheme-background w-full h-auto mb-4 p-4">
                <form className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="relative flex-grow w-full sm:mr-4">
                        <label htmlFor="Buscar" className="sr-only">Buscar</label>
                        <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="Buscar"
                            className="block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-darkTheme-icono focus:border-darkTheme-icono"
                            placeholder="Buscar por nombre o apellido"
                            required
                            value={busqueda}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button type="button" className="flex items-center justify-center space-x-2 rounded-lg border bg-violet-500 px-5 py-2.5 text-base font-medium text-white transition-all hover:bg-violet-700 focus:ring focus:ring-violet-200">
                            <FaUserPlus className="text-2xl" />
                            <span>Agregar</span>
                        </button>
                        <button type="button" className="flex items-center justify-center space-x-2 rounded-lg border bg-violet-500 px-5 py-2.5 text-base font-medium text-white transition-all hover:bg-violet-700 focus:ring focus:ring-violet-200">
                            <FaDownload className="text-2xl" />
                            <span>Informe</span>
                        </button>
                    </div>
                </form>
            </div>

            <div className="bg-white dark:bg-darkTheme-background rounded-lg shadow overflow-hidden flex-grow p-3">
                <CustomTypography
                    fontBold="font-bold"
                    fontSize="text-3xl"
                    className="text-darkTheme-background mb-7 dark:text-lightTheme-background"
                    color="text-darkTheme-background"
                >
                    Listado de Padrinos
                </CustomTypography>
                <div className="overflow-x-auto">
                    <Table tableHead={tableHead} tableRows={tableRowsPadrinos} />
                </div>
            </div>

            {/* Modal para crear un padrino */}
            <Modal
                showModal={showCreateModal}
                setShowModal={setShowCreateModal}
                title="Agregar Padrino"
                body={<PadrinoCreate />}
                confirmText="Guardar"
                cancelText="Cancelar"
                onConfirm={handleCloseCreateModal}
            />
        </div>

    );
}
