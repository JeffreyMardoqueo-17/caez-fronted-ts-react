import React from 'react';
import { DashboardCard } from '../../DashboardCard/DashboardCard';
import { FaMoneyBill, FaUser } from "react-icons/fa";
import { Table } from '../../Table/Table';
import { BarChartBarras } from '../../Graficos/BarChart';
import { AreaChartUsage } from '../../Graficos/AreaChartUsage';

const Dashboard = () => {
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
                        <Table />
                    </div>
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg'>
                        <BarChartBarras />
                    </div>
                </div>
                {/* Tercera sección */}
                <div className='w-full lg:w-1/3 flex flex-col gap-4'>
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg h-full'>
                        <AreaChartUsage />
                        {/* Aquí puedes colocar componentes como tarjetas informativas */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
