import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from '../../Table/Table';
import { Alumno } from '../../../class/Alumno';

export default function AlumnosPage() {
    const [Data, setData] = useState<Alumno[]>([]);

    useEffect(() => {
        const getAlumnos = async () => {
            try {
                const respuesta = await axios.get("http://localhost:5000/Alumnos/");
                const data = respuesta.data.map((alumno: any) => ({
                    Nombre: alumno.Nombre,
                    Apellido: alumno.Apellido,
                    Encargado: alumno.Encargado, // Asumiendo que tienes el ID o nombre del encargado aquí
                    TipoDocumento : alumno.TipoDocumento,
                    NumDocumento: alumno.NumDocumento,
                    Grupo: alumno.Grupo, // Asumiendo que tienes el ID o nombre del grupo aquí
                    EsBecado: alumno.EsBecado,
                    Turno: alumno.Turno
                    // Puedes agregar aquí un campo para acciones si es necesario
                }));
                console.log("Datos recibidos:", data);
                setData(data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        getAlumnos();
    }, []);

    const tableHead = [ 'Nombre', 'Apellido', 'Encargado',"Tipo Doc", 'N° Documento', 'Grupo', 'Becado','Turno',  'Acciones'];

    return (
        <>
            <div className="flex h-screen w-full">
                <div className="w-5/6 bg-lightTheme-background dark:bg-darkTheme-background p-4">
                    Contenido de la caja izquierda
                    <div className='overflow-auto max-h-[500px]'>
                        <Table tableHead={tableHead} tableRows={Data} />
                    </div>
                </div>
                <div className="w-1/6 bg-gray-300 p-4">
                    Contenido de la caja derecha
                </div>
            </div>
        </>
    );
}