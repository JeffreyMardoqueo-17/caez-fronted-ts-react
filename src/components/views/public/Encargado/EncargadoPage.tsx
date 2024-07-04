import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from '../../../Table/Table';
import { Encargado } from '../../../../interfaces/TablasBD';

const EncargadoPage = () => {
    const [encargados, setEncargados] = useState<Encargado[]>([]);
    const [tablaEncargados, setTablaEncargados] = useState<Encargado[]>([]);
    const [busqueda, setBusqueda] = useState<string>("");

    const getTiposDocumentos = async () => {
        try {
            const url = 'http://localhost:3000/Encargados';
            const respuesta = await axios.get<Encargado[]>(url);
            setEncargados(respuesta.data);
            setTablaEncargados(respuesta.data);
            console.log('Datos recibidos:', respuesta.data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    useEffect(() => {
        getTiposDocumentos();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
        console.log("Busqueda", + e.target.value);
    };

    const filtrar = (terminoBusqueda: string) => {
        const resultadosBusqueda = tablaEncargados.filter((elemento) => {
            if (elemento.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.Apellido.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
            return null;
        });
        setEncargados(resultadosBusqueda);
    };

    const tableHead = ["Nombre", "Apellido", "Cargo", "Telefono", "Tel. Emergencia", "Correo", "Tip. Documento", "#", "Administrador", "Fecha Registro"];

    const tableRows = encargados.map(encargado => [
        encargado.Nombre,
        encargado.Apellido,
        encargado.Role,
        encargado.Telefono,
        encargado.TelEmergencia,
        encargado.Correo,
        encargado.TipoDocumento,
        encargado.NumDocumento,
        encargado.Administrador,
        new Date(encargado.FechaRegistro).toLocaleDateString()
    ]);

    return (
        <div className="p-4 h-full flex flex-col">
            <div className='top-1 bg-lightTheme-primary dark:bg-darkTheme-background w-full h-auto mb-10 p-4'>
                <form className="flex justify-between items-center">
                    <div className="relative flex-grow">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
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
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Buscar por nombre o apellido"
                            required
                            value={busqueda}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex space-x-2 ml-4">
                        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Crear</button>
                        <button type="button" className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Generar Informe</button>
                    </div>
                </form>
            </div>
            <div className="bg-white dark:bg-darkTheme-background rounded-lg shadow overflow-auto flex-grow">
                <Table tableHead={tableHead} tableRows={tableRows} />
            </div>
        </div>
    );
}

export default EncargadoPage;

