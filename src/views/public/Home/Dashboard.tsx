import React, { useState, useEffect } from 'react';
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaUsersLine, FaUsersBetweenLines, FaUsersRays } from "react-icons/fa6";
import { DashboardCard } from '../../../components/Cards/DashboardCard';
import { Table } from '../../../components/Table/Table';
import { BarChartBarras } from '../../../components/Graficos/BarChart';
import { AreaChartUsage } from '../../../components/Graficos/AreaChartUsage';
import { Modal } from '../../../components/modales/Modal';
import { CustomTypography } from '../../../components/Forms/CustomTypography';
import ReusableFormInfor from '../../../components/ReusableFormInfor/ReusableFormInfor';
import { Alumno, Padrino } from '../../../interfaces/TablasBD';
import { getAlumnos } from '../../../utils/Alumno';
import { getPadrinos } from '../../../utils/Padrino';

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<JSX.Element | string>("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalType, setModalType] = useState(""); // "delete" or "info"
    const [, setSelectedAlumno] = useState<Alumno | null>(null);

    //para traer a el alumno 
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    const [, setTablaAlumnos] = useState<Alumno[]>([]);
    useEffect(() => {
        const fetchAlumnos = async () => {
            const alumnosData = await getAlumnos();
            setAlumnos(alumnosData);
            setTablaAlumnos(alumnosData);
        };
        fetchAlumnos();
    }, []);


    //para traer a los padrinos 
    const [padrinos, setPadrinos] = useState<Padrino[]>([]);
    const [, setTablaPadrinos] = useState<Padrino[]>([]);
    useEffect(() => {
        const fetchPadrinos = async () => {
            const padrinosData = await getPadrinos();
            setPadrinos(padrinosData);
            setTablaPadrinos(padrinosData);
        };
        fetchPadrinos();
    }, []);


    const handleDelete = (nombre: string) => {
        setModalTitle("Eliminar Alumno");
        setModalContent(`¿Estás seguro de que deseas eliminar a ${nombre}?`);
        setModalType("delete");
        setShowModal(true);
    };

    const handleShowInfo = (alumno: Alumno) => {
        setSelectedAlumno(alumno); // Actualiza el estado del alumno seleccionado
        setModalTitle("Información del Alumno");
        const fields = [
            { label: 'Nombre', value: alumno.Nombre },
            { label: 'Apellido', value: alumno.Apellido },
            { label: 'Fecha de Nacimiento', value: alumno.FechaNacimiento },
            { label: 'Sexo', value: alumno.Sexo },
            { label: 'Role', value: alumno.Role },
            { label: 'Encargado', value: alumno.Encargado },
            { label: 'Enfermedad', value: alumno.Enfermedad },
            { label: 'Tipo de Documento', value: alumno.TipoDocumento },
            { label: 'Número de Documento', value: alumno.NumDocumento },
            { label: 'Grupo', value: alumno.Grupo },
            { label: 'Turno', value: alumno.Turno },
            { label: 'Grado', value: alumno.Grado },
            { label: 'Administrador', value: alumno.Administrador },
            { label: 'Padrino', value: alumno.Padrino },
            { label: 'Fecha de Registro', value: alumno.FechaRegistro },
            { label: 'Es Becado', value: alumno.EsBecado ? "Sí" : "No" },
        ];
        setModalContent(<ReusableFormInfor fields={fields} />);
        setModalType("info");
        setShowModal(true);
    };

    const tableHead = ["Nombre", "Apellido", "Encargado", "NIE", "GRADO", "Turno", "Es Becado", "Acciones"];

    const tableRows = alumnos.map(alumno => ({
        Nombre: alumno.Nombre,
        Apellido: alumno.Apellido,
        Encargado: alumno.Encargado,
        NumDocumento: alumno.NumDocumento,
        Grado: alumno.Grado,
        Turno: alumno.Turno,
        "Es Becado": alumno.EsBecado ? 'SI' : 'NO',
    }));

    const tableHead2 = ["Nombre", "Apellido"];
    const tableRows2 = padrinos.map(padrino => ({
        Nombre: padrino.Nombre,
        Apellido: padrino.Apellido,
    }));

    return (
        <div className="flex flex-col w-full h-full  gap-1">
            {/* Contenedor Principal: Distribución de Contenidos */}
            <div className="flex flex-col lg:flex-row w-full h-full gap-1">
                {/* Columna Izquierda: Tarjetas, Tabla y Gráfico */}
                <div className="w-full h-full lg:w-2/3 flex flex-col gap-4 shadow-xl p-1 ">
                    {/* Tarjetas de Información */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                        <DashboardCard
                            title="Total alumnos Becados"
                            amount="60"
                            Icon={FaUsersLine}
                            iconColor="text-darkTheme-icono"
                        />
                        <DashboardCard
                            title="Total alumnos en Deuda"
                            amount="40"
                            Icon={FaUsersRays}
                            iconColor="text-darkTheme-icono"
                        />
                        <DashboardCard
                            title="Total de Alumnos"
                            amount="100"
                            Icon={FaUsersBetweenLines}
                            iconColor="text-darkTheme-icono"
                        />
                    </div>
                    {/* Tabla de Alumnos */}
                    <div className="bg-lightTheme-primary dark:bg-darkTheme-background p-4 w-full rounded-lg overflow-x-auto">
                        <Table tableHead={tableHead} tableRows={tableRows} />
                    </div>
                    {/* Gráfico de Barras */}
                    <div className="bg-lightTheme-pry dark:bg-darkTheme-background p-1 rounded-lg h-full">
                        <BarChartBarras />
                    </div>
                </div>
                {/* Columna Derecha: Gráficos y Tabla */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4">
                    <div className="bg-lightTheme-background dark:bg-darkTheme-background p-1 shadow-xl rounded-lg flex flex-col gap-4 h-full">
                        {/* Gráfico de Área */}
                        <div className="bg-lightTheme-primary dark:bg-darkTheme-background p-4 rounded-lg">
                            <AreaChartUsage />
                        </div>
                        {/* Tabla de Padrinos */}
                        <div className="bg-lightTheme-primary dark:bg-darkTheme-background p-4 rounded-lg mt-4">
                            <CustomTypography
                                color=""
                                fontBold="font-bold"
                                fontSize="font-base"
                                className="text-darkTheme-background dark:text-lightTheme-background"
                            >
                                Padrinos
                            </CustomTypography>
                            <Table tableHead={tableHead2} tableRows={tableRows2} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title={modalTitle}
                body={modalContent}
                confirmText={modalType === "delete" ? "Eliminar" : ""}
                cancelText="Cancelar"
                onConfirm={modalType === "delete" ? () => console.log('Item deleted') : undefined}
            />
        </div>

    );
};

export default Dashboard;
