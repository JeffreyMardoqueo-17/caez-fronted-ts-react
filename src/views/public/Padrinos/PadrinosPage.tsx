// import React from 'react'
import { useState, useEffect } from 'react';
import { Padrino } from '../../../interfaces/TablasBD';
import { filtrarPadrinos, getPadrinos } from '../../../utils/Padrino';
import { FaUserPlus, FaDownload } from 'react-icons/fa';
import { CustomTypography } from '../../../components/Forms/CustomTypography';
import { Table } from '../../../components/Table/Table';

export default function PadrinosPage() {
    //Para abrir o cerrar a el modal
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

    //para traer a los padrinos 
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

    //DATOS PARA LLENAR LAS TABLAS, LOS HEADER Y LAS FILAAS
    const tableHead = ["Nombre", "Apellido"];
    const tableRows = padrinos.map(padrino => ({
        Nombre: padrino.Nombre,
        Apellido: padrino.Apellido,
    }));

    //para llenar el termino de busqueda
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
                    color="text-darkTheme-background"
                >
                    Listado de Alumnos
                </CustomTypography>
                <div className="mt-7">
                    <Table tableHead={tableHead} tableRows={tableRows} />
                </div>
            </div>

        </div>
    )
}
