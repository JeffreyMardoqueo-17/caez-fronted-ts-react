import React, { useState } from 'react';
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaUsersLine, FaUsersBetweenLines, FaUsersRays } from "react-icons/fa6";
import { DashboardCard } from '../../../components/Cards/DashboardCard';
import { Table } from '../../../components/Table/Table';
import { BarChartBarras } from '../../../components/Graficos/BarChart';
import { AreaChartUsage } from '../../../components/Graficos/AreaChartUsage';
import { Modal } from '../../../components/modales/Modal';
import { CustomTypography } from '../../../components/Forms/CustomTypography';
import ReusableFormInfor from '../../../components/ReusableFormInfor/ReusableFormInfor';
import { Alumno } from '../../../interfaces/TablasBD';

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<JSX.Element | string>("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalType, setModalType] = useState(""); // "delete" or "info"
    const [selectedAlumno, setSelectedAlumno] = useState<Alumno | null>(null);

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

    const tableHead1 = ["Nombre", "Apellido", "Grado", "EsBecado", "Acciones"];
    const tableRows1 = [
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            EsBecado: "Sí",
            Acciones: [
                { icon: <FaEdit />, onClick: () => console.log('Editar') },
                {
                    icon: <FaEye />, onClick: () => handleShowInfo({
                        Id: "1", Nombre: "Juan", Apellido: "Pérez", FechaNacimiento: "2007-06-01", Sexo: "M", Role: "alumno", Encargado: "Jeffrey", Enfermedad: "Calentura", TipoDocumento: "DNI", NumDocumento: "1245566", Grupo: "Grupo 1", Turno: "Mañana", Grado: "10", Administrador: "Jeffrey", Padrino: "", FechaRegistro: "2023-06-01", EsBecado: true
                    })
                },
                { icon: <FaTrash />, onClick: () => handleDelete('Juan Pérez') }
            ]
        },
    ];

    const tableHead2 = ["Nombre", "Apellido", "Acciones"];
    const tableRows2 = [
        {
            Nombre: "Jeffrey",
            Apellido: "Mardoqueo",
            Acciones: [
                { icon: <FaEye />, onClick: () => console.log('Editar') },
            ]
        },
        {
            Nombre: "Jeffrey",
            Apellido: "Mardoqueo",
            Acciones: [
                { icon: <FaEye />, onClick: () => console.log('Editar') },
            ]
        },
        {
            Nombre: "Jeffrey",
            Apellido: "Mardoqueo",
            Acciones: [
                { icon: <FaEye />, onClick: () => console.log('Editar') },
            ]
        },
        {
            Nombre: "Jeffrey",
            Apellido: "Mardoqueo",
            Acciones: [
                { icon: <FaEye />, onClick: () => console.log('Editar') },
            ]
        },
    ];

    return (
        <div className='flex flex-col w-full h-full p-4 gap-4'>
            <div className='flex flex-col lg:flex-row w-full h-full gap-4'>
                <div className='w-full h-auto lg:w-2/3 flex flex-col gap-4 shadow-xl p-2'>
                    <div className='flex flex-wrap gap-2'>
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
                    <div className='bg-lightTheme-primary dark:bg-darkTheme-background p-4 w-auto rounded-lg'>
                        <Table tableHead={tableHead1} tableRows={tableRows1} />
                    </div>
                    <div className='bg-lightTheme-pry dark:bg-darkTheme-background p-4  rounded-lg'>
                        <BarChartBarras />
                    </div>
                </div>
                <div className='w-full lg:w-1/3 flex flex-col '>
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-xl rounded-lg h-full gap-3'>
                        <div className='bg-lightTheme-primary dark:bg-darkTheme-background p-4  rounded-lg'>
                            <AreaChartUsage />
                        </div>

                        <div className='mt-4'>
                            <div className='bg-lightTheme-primary dark:bg-darkTheme-background p-4  rounded-lg'>
                                <CustomTypography
                                    color=''
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
            </div>
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
