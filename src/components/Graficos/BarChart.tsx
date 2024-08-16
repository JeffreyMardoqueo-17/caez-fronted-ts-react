import { BarChart } from '@tremor/react';

const chartdata = [
    {
        month: 'Enero',
        'Pagados': 80,
        'Faltantes': 20,
    },
    {
        month: 'Febrero',
        'Pagados': 85,
        'Faltantes': 15,
    },
    {
        month: 'Marzo',
        'Pagados': 75,
        'Faltantes': 25,
    },
    {
        month: 'Abril',
        'pagados': 45,
        'Faltantes': 55,
    },
    {
        month: 'Mayo',
        'Pagados': 60,
        'Faltantes': 40,
    },
    {
        month: 'Junio',
        'Pagados': 70,
        'Faltantes': 30,
    },
    {
        month: 'Julio',
        'Pagados': 90,
        'Faltantes': 10,
    },
    {
        month: 'Agosto',
        'Pagados': 55,
        'Faltantes': 45,
    },
    {
        month: 'Septiembre',
        'Pagados': 65,
        'Faltantes': 35,
    },
    {
        month: 'Octubre',
        'Pagados': 75,
        'Faltantes': 25,
    },
    {
        month: 'Noviembre',
        'Pagados': 80,
        'Faltantes': 20,
    },
    {
        month: 'Diciembre',
        'Pagados': 85,
        'Faltantes': 15,
    }
];

export function BarChartBarras() {
    return (
        <div className='bg-lightTheme-primary dark:bg-darkTheme-formulario  rounded-d shadow-md'>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Pagos de Alumnos por Mes
            </h3>
            <BarChart
                className="mt-6"
                data={chartdata}
                index="month"
                categories={['Pagados', 'Faltantes']}
                colors={['indigo', 'cyan']}
                yAxisWidth={30}
            />
        </div>
    );
}
