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
    // Agrega los datos para los demás meses
];

export function BarChartBarras() {
    return (
        <>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Pagos de Alumnos por Mes
            </h3>
            <BarChart
                className="mt-6"
                data={chartdata}
                index="month"
                categories={['Pagados', 'Faltantes']}
                color="fuchsia, red"
                yAxisWidth={30}
            />
        </>
    );
}
