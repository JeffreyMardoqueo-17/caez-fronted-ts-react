import React from 'react';
import { DashboardCard } from '../../DashboardCard/DashboardCard';
import { FaMoneyBill, FaUser } from "react-icons/fa";
import { Table } from '../../Table/Table';
import { BarChartBarras } from '../../Graficos/BarChart';
import { AreaChartUsage } from '../../Graficos/AreaChartUsage';
import { ActionButton } from '../../inputs/Buttoom/ActionButton';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { CustomTypography } from '../../Forms/CustomTypography';


const Dashboard = () => {
    // Ejemplo de uso
    const tableHead1 = ["Nombre", "Apellido", "Grado", "Estado", "Acciones"];
    const tableRows1 = [
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
            Acciones: [
                { icon: <FaEdit />, color: "blue", onClick: () => console.log('Editar') },
                { icon: <FaEye />, color: "green", onClick: () => console.log('Ver') },
                { icon: <FaTrash />, color: "red", onClick: () => console.log('Eliminar') }
            ]
        }, {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
            Acciones: [
                { icon: <FaEdit />, color: "blue", onClick: () => console.log('Editar') },
                { icon: <FaEye />, color: "green", onClick: () => console.log('Ver') },
                { icon: <FaTrash />, color: "red", onClick: () => console.log('Eliminar') }
            ]
        },
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
            Acciones: [
                { icon: <FaEdit />, color: "blue", onClick: () => console.log('Editar') },
                { icon: <FaEye />, color: "green", onClick: () => console.log('Ver') },
                { icon: <FaTrash />, color: "red", onClick: () => console.log('Eliminar') }
            ]
        },
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
            Acciones: [
                { icon: <FaEdit />, color: "blue", onClick: () => console.log('Editar') },
                { icon: <FaEye />, color: "green", onClick: () => console.log('Ver') },
                { icon: <FaTrash />, color: "red", onClick: () => console.log('Eliminar') }
            ]
        },
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
            Acciones: [
                { icon: <FaEdit />, color: "blue", onClick: () => console.log('Editar') },
                { icon: <FaEye />, color: "green", onClick: () => console.log('Ver') },
                { icon: <FaTrash />, color: "red", onClick: () => console.log('Eliminar') }
            ]
        },
    ];
    const tableHead2 = ["Nombre", "Apellido", "Acciones"];
    const tableRows2 = [
        {
            Nombre: "Jeffrey",
            Apellido: "Mardoqueo",

            Acciones: [
                { icon: <FaEdit />, color: "blue", onClick: () => console.log('Editar') },
            ]
        },
    ];


    return (
        <div className='flex flex-col w-full h-full p-4 gap-4'>
            <div className='flex flex-col lg:flex-row w-full h-full gap-4'>
                <div className='w-full lg:w-2/3 flex flex-col gap-4'>
                    {/* Primera sección */}
                    <div className='flex flex-wrap gap-4'>
                        <DashboardCard
                            title="Total alumnos Becados"
                            amount="$5,000"
                            Icon={FaMoneyBill}
                            iconColor="text-green-500"
                        />
                        <DashboardCard
                            title="Total alumnos en Deuda"
                            amount="1,200"
                            Icon={FaUser}
                            iconColor="text-blue-500"
                        />
                        <DashboardCard
                            title="Total Revenue"
                            amount="$5,000"
                            Icon={FaMoneyBill}
                            iconColor="text-green-500"
                        />
                    </div>
                    {/* Segunda sección */}
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg'>
                        <Table tableHead={tableHead1} tableRows={tableRows1} />

                    </div>
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg'>
                        <BarChartBarras />
                    </div>
                </div>
                {/* Tercera sección */}
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
        </div>
    );
};

export default Dashboard;
