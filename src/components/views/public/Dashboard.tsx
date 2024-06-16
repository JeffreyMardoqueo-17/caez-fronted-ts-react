import React, { useState } from 'react';
import { DashboardCard } from '../../DashboardCard/DashboardCard';
import { FaMoneyBill, FaUser, FaEdit, FaEye, FaTrash, } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6"; //total de alumno becados
import { FaUsersBetweenLines } from "react-icons/fa6"; //total de alumnos
import { FaUsersRays } from "react-icons/fa6"; //total de alumnos en deuda

import { Table } from '../../Table/Table';
import { BarChartBarras } from '../../Graficos/BarChart';
import { AreaChartUsage } from '../../Graficos/AreaChartUsage';
import { CustomTypography } from '../../Forms/CustomTypography';
import { Modal } from '../../modales/Modal';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalType, setModalType] = useState(""); // "delete" or "info"
    const [alumno, setAlumno] = useState<Alumno>({
        Nombre: "",
        Apellido: "",
        Grado: "",
        Estado: ""
    });

    const handleDelete = (nombre: string) => {
        setModalTitle("Eliminar Alumno");
        setModalContent(`¿Estás seguro de que deseas eliminar a ${nombre}?`);
        setModalType("delete");
        setShowModal(true);
    };

    const handleShowInfo = (alumno: Alumno) => {
        setModalTitle("Información del Alumno");
        setModalContent(`
            Nombre: ${alumno.Nombre}
            Apellido: ${alumno.Apellido}
            Grado: ${alumno.Grado}
            Estado: ${alumno.Estado}
        `);
        setModalType("info");
        setShowModal(true);
    };

    const tableHead1 = ["Nombre", "Apellido", "Grado", "Estado", "Acciones"];
    const tableRows1 = [
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
            Acciones: [
                { icon: <FaEdit />, onClick: () => console.log('Editar') },
                { icon: <FaEye />, onClick: () => handleShowInfo({ Nombre: "Juan", Apellido: "Pérez", Grado: "10", Estado: "Activo" }) },
                { icon: <FaTrash />, onClick: () => handleDelete('Juan Pérez') }
            ]
        },
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
            Acciones: [
                { icon: <FaEdit />, onClick: () => console.log('Editar') },
                { icon: <FaEye />, onClick: () => handleShowInfo({ Nombre: "Juan", Apellido: "Pérez", Grado: "10", Estado: "Activo" }) },
                { icon: <FaTrash />, onClick: () => handleDelete('Juan Pérez') }
            ]
        },
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
            Acciones: [
                { icon: <FaEdit />, onClick: () => console.log('Editar') },
                { icon: <FaEye />, onClick: () => handleShowInfo({ Nombre: "Juan", Apellido: "Pérez", Grado: "10", Estado: "Activo" }) },
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
                <div className='w-full lg:w-2/3 flex flex-col gap-4'>
                    <div className='flex flex-wrap gap-4'>
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
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg'>
                        <Table tableHead={tableHead1} tableRows={tableRows1} />
                    </div>
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg'>
                        <BarChartBarras />
                    </div>
                </div>
                <div className='w-full lg:w-1/3 flex flex-col '>
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg h-full gap-3'>
                        <AreaChartUsage />
                        <div className='mt-4'>
                            <CustomTypography
                                variant=""
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
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title={modalTitle}
                content={modalContent}
                confirmText={modalType === "delete" ? "Eliminar" : ""}
                cancelText="Cancelar"
                onConfirm={modalType === "delete" ? () => console.log('Item deleted') : undefined}
            />
        </div>
    );
};

export default Dashboard;
