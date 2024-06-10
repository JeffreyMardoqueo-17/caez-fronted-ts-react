import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

// Definir un tipo para las claves de colors
type ColorName = '--yellow-500' | '--blue-900' | '--blue-50';

// Función para obtener el valor hexadecimal de un color de Tailwind CSS
const getHexColor = (colorName: ColorName, isDarkMode: boolean): string => {
    const colors: Record<ColorName, string> = {
        '--yellow-500': '#FFEC2B',
        '--blue-900': '#030A40',
        '--blue-50': '#A8B2FF',
    };

    return colorName === '--yellow-500' ? colors['--yellow-500'] : (isDarkMode ? colors['--blue-50'] : colors[colorName]);
};

const Barras = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const labelColor = isDarkMode ? '#FFFFFF' : '#A0AEC0'; // Color blanco o gris claro para los labels
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: getHexColor('--yellow-500', isDarkMode),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [41, 52, 24, 74, 23, 21, 32]
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: getHexColor('--blue-900', isDarkMode),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: isDarkMode ? '#ffffff' : '#4a5568' // Color blanco en modo oscuro, grisito claro en modo claro
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };


        setChartData(data);
        setChartOptions(options);
    }, [isDarkMode]);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    );
};

export default Barras;
