import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from '../../Table/Table'; // Asegúrate de importar el componente Table desde la ruta correcta

export default function AlumnosPage() {
    const [Data, setData] = useState<any[]>([]); // Specify the type for Data as an array of any

    // para obtener todos los alumnos
    useEffect(() => {
        const getAlumnos = async () => {
            try {
                const respuesta = await axios.get("http://localhost:5000/alumnos/");
                const data = respuesta.data;
                console.log("Datos recibidos:", data);
                setData(data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }
        getAlumnos();
    }, []);

    const tableHead = ['Id', 'Nombre', 'Apellido', 'FechaNacimiento', 'IdSexo', 'IdRole', 'IdEncargado', 'IdEnfermedad', 'IdTipoDocumento', 'NumDocumento'];

    return (
        <>
            {/* <div className='flex flex-col w-full h-full p-2 gap-4'>
                <div className='flex flex-col lg:flex-row w-full h-full gap-4'>
                    <div className='w-full lg:w-3/4 flex flex-col gap-4'>
                        <div className='flex flex-wrap gap-4 bg-red-600 p-4'>
                            <input type="text" name="" id="" placeholder='aqui ira el nombre para busqeuda' />

                            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">REGISTRAR ALUMNO</button>
                        </div>
                        <div className='bg-lightTheme-background dark:bg-blue-900 p-4 shadow-md rounded-lg overflow-x-auto'>
                            <div className='overflow-auto max-h-[500px]'>
                                <Table tableHead={tableHead} tableRows={Data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             */}
            <div className="flex h-screen">
                {/* Caja izquierda */}
                <div className="w-5/6 bg-gray-200 p-4">
                    Contenido de la caja izquierda
                </div>
                {/* Caja derecha */}
                <div className="w-1/6 bg-gray-300 p-4">
                    Contenido de la caja derecha
                </div>
            </div>
        </>
    );
}
