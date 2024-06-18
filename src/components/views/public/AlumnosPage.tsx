import { useEffect, useState } from 'react';
import axios from 'axios';
import { TablePagination } from '../../Table/TablePaginacion'; // 
import { CustomInput } from '../../Forms/CustomInput';
import { DashboardCard } from '../../DashboardCard/DashboardCard';
import { CustomTypography } from '../../Forms/CustomTypography';
import { FaMoneyBill, FaUser, FaEdit, FaEye, FaTrash, } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6"; //total de alumno becados
import { FaUsersBetweenLines } from "react-icons/fa6"; //total de alumnos
import { FaUsersRays } from "react-icons/fa6"; //total de alumnos en deuda
import { BarChartBarras } from '../../Graficos/BarChart';
import { AreaChartUsage } from '../../Graficos/AreaChartUsage';

export default function AlumnosPage() {
    const [data, setData] = useState<any[]>([]);
    const [textoBusqueda, setTextoBusqueda] = useState<string>("");

    useEffect(() => {
        const getAlumnos = async () => {
            try {
                const respuesta = await axios.get("http://localhost:5000/alumnos/");
                const data = respuesta.data;
                console.log("Datos recibidos:", data);
                setData(data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }
        getAlumnos();
    }, []);

    const tableHead = ['Id', 'Nombre', 'Apellido', 'FechaNacimiento', 'IdSexo', 'IdRole', 'IdEncargado', 'IdEnfermedad', 'IdTipoDocumento', 'NumDocumento'];

    return (
        <div className='flex flex-col w-full h-full p-4 gap-4'>
            <div className='flex flex-col lg:flex-row w-full  h-full gap-4 bg-red-500'>
                <div className='w-full lg:w-2/3 flex flex-col gap-4 bg-green-800 p-2'>
                    <div className='flex flex-wrap gap-4 bg-yellow-300'>
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
                    <div className='bg-lightTheme-background dark:bg-darkTheme-background p-4 shadow-md rounded-lg overflow-x-hidden'>
                        <TablePagination tableHead={tableHead} tableRows={data} />
                    </div>

                </div>
                {/* parte de la derecha */}
                <div className='w-full lg:w-auto flex flex-col gap-4 bg-blue-600 p-2'>
                    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
                </div>
            </div>
        </div>
    );
}
