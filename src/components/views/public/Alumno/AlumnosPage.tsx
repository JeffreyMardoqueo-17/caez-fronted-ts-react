import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from '../../../Table/Table';
import { Alumno } from '../../../../class/Alumno';
import { TotalCard } from '../../../Cards/TotalesCards';
import { FaUserPlus, FaFileAlt, FaUser, FaMoneyBillAlt, FaGraduationCap, FaEye } from 'react-icons/fa';
import { Boton } from '../../../inputs/Buttoom/Boton';
import { Modal } from '../../../modales/Modal';
import { AlumnoForm } from '../../../Forms/AlumnoForm/AlumnoForm';

export default function AlumnosPage() {
    const [Data, setData] = useState<{ [key: string]: unknown }[]>([]);
    const [totalAlumnos, setTotalAlumnos] = useState<number>(0);
    const [totalBecados, setTotalBecados] = useState<number>(0);
    const [totalNoBecados, setTotalNoBecados] = useState<number>(0);
    const [selectedAlumno, setSelectedAlumno] = useState<Alumno | null>(null); // Estado para almacenar el alumno seleccionado

    useEffect(() => {
        const getAlumnos = async () => {
            try {
                const respuesta = await axios.get("http://localhost:3000/Alumnos/");
                const data = respuesta.data.map((alumno: Alumno) => ({
                    Nombre: alumno.Nombre,
                    Apellido: alumno.Apellido,
                    Encargado: alumno.IdEncargado,
                    TipoDocumento: alumno.IdTipoDocumento,
                    NumDocumento: alumno.NumDocumento,
                    Grupo: alumno.IdGrupo,
                    EsBecado: alumno.EsBecado,
                    Turno: alumno.IdTurno,
                    FechaNacimiento: alumno.FechaNacimiento,
                    Acciones: [ // Aquí se define el arreglo de acciones, en este caso solo el botón 'Ver más'
                        {
                            icon: <FaEye />,
                            color: 'blue',
                            onClick: () => handleVerMas(alumno)
                        }
                    ]
                }));
                console.log("Datos recibidos:", data);
                setData(data);
                setTotalAlumnos(data.length);
                setTotalBecados(data.filter((alumno) => alumno.EsBecado).length);
                setTotalNoBecados(data.filter((alumno) => !alumno.EsBecado).length);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        getAlumnos();
    }, []);

    const handleVerMas = (alumno: Alumno) => {
        console.log("Ver más sobre:", alumno);
        setSelectedAlumno(alumno); // Establecer el alumno seleccionado para mostrar en el modal
    };

    const handleCloseModal = () => {
        setSelectedAlumno(null); // Cerrar el modal al limpiar el alumno seleccionado
    };

    const tableHead = ['Nombre', 'Apellido', 'Encargado', 'Tipo Doc', 'N° Documento', 'Grupo', 'Becado', 'Turno', 'Fecha Nacimiento', 'Acciones'];

    return (
        <>
            <div className="flex flex-col min-h-screen w-full p-4 bg-lightTheme-primary dark:bg-darkTheme-background">
                <div className="flex justify-between mb-4 bg-lightTheme-primary dark:bg-darkTheme-background">
                    <div className="flex space-x-4 p-2 flex-grow mb-2">
                        <TotalCard title="Total de alumnos" total={totalAlumnos} icon={<FaUser className="text-4xl text-center text-blue-500 mb-2" />} />
                        <TotalCard title="Total de alumnos becados" total={totalBecados} icon={<FaGraduationCap className="text-4xl text-center text-yellow-500 mb-2" />} />
                        <TotalCard title="Total de alumnos no becados" total={totalNoBecados} icon={<FaMoneyBillAlt className="text-4xl text-center text-green-500 mb-2" />} />
                    </div>
                    <div className="flex flex-col justify-end p-2">
                        <Boton color='bg-green-400' texto="Crear Alumno" icono={<FaUserPlus />} onClick={() => console.log("Agregando Alumno")} />
                        <Boton color='bg-indigo-500' texto="Informe de Alumnado" icono={<FaFileAlt />} onClick={() => console.log("Informe")} />
                    </div>
                </div>
                <div className="min-h-full bg-lightTheme-primary p-3 dark:bg-darkTheme-background">
                    <Table tableHead={tableHead} tableRows={Data} />
                </div>
            </div>
            {selectedAlumno && ( // Mostrar el modal solo si hay un alumno seleccionado
                <Modal
                    showModal={true}
                    setShowModal={handleCloseModal}
                    title={`${selectedAlumno.Nombre} ${selectedAlumno.Apellido}`}
                    body={<AlumnoForm alumno={selectedAlumno} />} // Pasar el formulario del alumno como cuerpo del modal
                    confirmText="Aceptar"
                    cancelText="Cancelar"
                    onConfirm={handleCloseModal}
                />
            )}
        </>
    );
}
