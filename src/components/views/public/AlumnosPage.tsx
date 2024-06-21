import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from '../../Table/Table'; // Asegúrate de importar el componente Table desde la ruta correcta
import ThemeToggleButton from '../../ThemeToggleButton/ThemeToggleButton';
export default function AlumnosPage() {
    const [Data, setData] = useState<any[]>([]); // Specify the type for Data as an array of any

    // para obtener todos los alumnos
    useEffect(() => {
        const getAlumnos = async () => {
            try {
                const respuesta = await axios.get("http://localhost:5000/Parentezcos/");
                const data = respuesta.data;
                console.log("Datos recibidos:", data);
                setData(data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }
        getAlumnos();
    }, []);

    const tableHead = ['Id', 'Nombre'];

    return (
        <>
            <div className="flex h-screen">
                {/* Caja izquierda */}
                <div className="w-5/6 bg-lightTheme-background dark:bg-darkTheme-background p-4">
                    Contenido de la caja izquierda
                    <div className='overflow-auto max-h-[500px]'>
                        <Table tableHead={tableHead} tableRows={Data} />
                    </div>
                    {/* <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} /> */}
                </div>
                {/* Caja derecha */}
                <div className="w-1/6 bg-gray-300 p-4">
                    Contenido de la caja derecha
                </div>
            </div>
        </>
    );
}
