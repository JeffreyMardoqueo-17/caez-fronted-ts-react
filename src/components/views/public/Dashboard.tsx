import React from 'react';
import { DashboardCard } from '../../DashboardCard/DashboardCard';
import { FaMoneyBill, FaUser } from "react-icons/fa";
import { Table } from '../../Table/Table';
import { BarChartBarras } from '../../Graficos/BarChart';
import { AreaChartUsage } from '../../Graficos/AreaChartUsage';
import { ActionButton } from '../../inputs/Buttoom/ActionButton';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';


const Dashboard = () => {
    const tableHead1 = ["Nombre", "Apellido", "Grado", "Estado", "Acciones"];
    const tableRows1 = [
        {
            Nombre: "Juan",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
        },
        {
            Nombre: "María",
            Apellido: "González",
            Grado: "11",
            Estado: "No Activo",
        },
        // Agrega más filas si es necesario
    ];

    const tableHead2 = ["Nombre", "Apellido", "Grado", "Estado", "Acciones"];
    const tableRows2 = [
        {
            Nombre: "Jeffrey",
            Apellido: "Pérez",
            Grado: "10",
            Estado: "Activo",
        },
        {
            Nombre: "Maradona",
            Apellido: "González",
            Grado: "11",
            Estado: "No Activo",
        },
        // Agrega más filas si es necesario
    ];

    return (
        <div className='flex flex-col w-full h-full p-4 gap-4'>
            <div className='flex flex-col lg:flex-row w-full gap-4'>
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
                        <Table tableHead={tableHead1} tableRows={tableRows1.map(row => ({ ...row, Acciones: <div className="flex"><ActionButton icon={<FaEdit />}  className="bg-blue-500 hover:bg-blue-600" onClick={() => console.log('Editar')} /><ActionButton icon={<FaEye />} className="bg-green-500 hover:bg-green-600" onClick={() => console.log('Ver')} /><ActionButton icon={<FaTrash />}  className="bg-red-500 hover:bg-red-600" onClick={() => console.log('Eliminar')} /></div> }))} />
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
                            <Table tableHead={tableHead2} tableRows={tableRows2.map(row => ({ ...row, Acciones: <div className="flex"><ActionButton icon={<FaPlus />}  className="bg-gray-500 hover:bg-gray-600" onClick={() => console.log('Ver más')} /></div> }))} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
