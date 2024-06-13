import React from 'react';
import { DashboardCard } from '../../DashboardCard/DashboardCard';
import { FaMoneyBill, FaUser } from "react-icons/fa";
import { Table } from '../../Table/Table';

const Dashboard = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full h-full p-4 gap-4'>
            <div className='w-full lg:w-4/5 h-full flex flex-col gap-4'>
                {/* Primera sección */}
                <div className='flex flex-wrap gap-4'>
                    <DashboardCard
                        title="Total Revenue"
                        amount="$5,000"
                        Icon={FaMoneyBill}
                        iconColor="text-green-500"
                    />
                    <DashboardCard
                        title="Total Users"
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
            </div>
            {/* Tercera sección */}
            <div className='w-full lg:w-1/5 h-full bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg'>
                <h2 className="text-lg font-semibold mb-4">Tarjetas Informativas</h2>
                {/* Aquí puedes colocar componentes como tarjetas informativas */}
            </div>
        </div>
    );
};

export default Dashboard;
