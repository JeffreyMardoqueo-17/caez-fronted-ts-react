
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from '../../../Table/Table';
import { Alumno } from '../../../../class/Alumno';
import { TotalCard } from '../../../Cards/TotalesCards';
import { FaUserPlus, FaFileAlt, FaUser, FaMoneyBillAlt, FaGraduationCap } from 'react-icons/fa';
import { Boton } from '../../../inputs/Buttoom/Boton';

export default function AlumnosPage() {
    const [Data, setData] = useState<Alumno[]>([]);
    const [totalAlumnos, setTotalAlumnos] = useState<number>(0);
    const [totalBecados, setTotalBecados] = useState<number>(0);
    const [totalNoBecados, setTotalNoBecados] = useState<number>(0);

    useEffect(() => {
        const getAlumnos = async () => {
            try {
                const respuesta = await axios.get("http://localhost:3000/Alumnos/");
                const data = respuesta.data.map((alumno: any) => ({
                    Nombre: alumno.Nombre,
                    Apellido: alumno.Apellido,
                    Encargado: alumno.Encargado,
                    TipoDocumento: alumno.TipoDocumento,
                    NumDocumento: alumno.NumDocumento,
                    Grupo: alumno.Grupo,
                    EsBecado: alumno.EsBecado,
                    Turno: alumno.Turno,
                    FechaNacimiento: alumno.FechaNacimiento,
                    Acciones: (
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleVerMas(alumno)}
                        >
                            Ver más
                        </button>
                    )
                }));
                console.log("Datos recibidos:", data);
                setData(data);
                setTotalAlumnos(data.length); // Aquí lleno el total de alumnos
                setTotalBecados(data.filter((alumno) => alumno.EsBecado).length); // Aquí lleno el total de alumnos becados
                setTotalNoBecados(data.filter((alumno) => !alumno.EsBecado).length); // Aquí lleno el total de alumnos no becados
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        getAlumnos();
    }, []);

    const handleVerMas = (alumno: Alumno) => {
        console.log("Ver más sobre:", alumno);
        // Aquí es donde abrirás el modal en el futuro
    };

    const tableHead = ['Nombre', 'Apellido', 'Encargado', 'Tipo Doc', 'N° Documento', 'Grupo', 'Becado', 'Turno', "Fecha Nacimiento", 'Acciones'];

    return (
        <>
            <div className="flex flex-col min-h-screen w-full p-4 bg-lightTheme-primary dark:bg-darkTheme-background">
                <div className="flex justify-between mb-4 bg-lightTheme-primary dark:bg-darkTheme-background">
                    <div className="flex space-x-4 p-2 flex-grow mb-2">
                        <TotalCard title="Total de alumnos" total={totalAlumnos} icon={<FaUser className="text-4xl text-center text-blue-500 mb-2" />} />
                        <TotalCard title="Total de alumnos becados" total={totalBecados} icon={<FaGraduationCap className="text-4xl text-center text-yellow-500 mb-2" />} />
                        <TotalCard title="Total de alumnos no becados" total={totalNoBecados} icon={<FaMoneyBillAlt className="text-4xl text-center text-green-500 mb-2" />} />
                    </div>
                    <div className="flex flex-col justify-end  p-2">
                        <Boton color='bg-green-400' texto="Crear Alumno" icono={<FaUserPlus />} onClick={() => console.log("Agregando Alumno")} />
                        <Boton color='bg-indigo-500' texto="Informe de Alumnado" icono={<FaFileAlt />} onClick={() => console.log("Informe")} />
                    </div>
                </div>
                <div className=" min-h-full bg-lightTheme-primary p-3 dark:bg-darkTheme-background">
                    <Table tableHead={tableHead} tableRows={Data} />
                </div>
            </div>
        </>
    );
}
