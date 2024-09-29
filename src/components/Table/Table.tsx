import React, { useState } from 'react';
import { CustomTypography } from "../Forms/CustomTypography";
import { ActionButton } from "../inputs/Buttoom/ActionButton";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// Interfaz para definir la estructura de las acciones en la tabla
interface Action {
    icon: React.ReactNode;
    onClick: () => void;
}

// Interfaz para definir las propiedades del componente Table
interface TableProps {
    tableHead: string[];
    tableRows: Array<{ [key: string]: string | Action[] }>;
}

// Componente Table que recibe los encabezados y las filas de la tabla como propiedades
export function Table({ tableHead, tableRows }: TableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const totalPages = Math.ceil(tableRows.length / itemsPerPage);

    const handleChangePage = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
    };

    const handleChangeItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRows = tableRows.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <label htmlFor="itemsPerPage" className="font-medium dark:text-darkTheme-gray">Mostrar:</label>
                    <select
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={handleChangeItemsPerPage}
                        className="dark:bg-darkTheme-input dark:text-darkTheme-gray cursor-pointer w-full rounded-md shadow-sm disabled:cursor-not-allowed dark:disabled:bg-gray-50"
                        style={{ lineHeight: '1.5' }}
                    >
                        {[5, 20, 30, 50, 100].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex items-center gap-2'>
                    <button
                        className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        onClick={() => handleChangePage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <FaArrowAltCircleLeft className="w-5 h-5" />
                        <span className="ml-1">Anterior</span>
                    </button>

                    <span className='font-medium dark:text-darkTheme-gray'>
                        {`Página ${currentPage} de ${totalPages}`}
                    </span>

                    <button
                        className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        onClick={() => handleChangePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <span className="mr-1">Siguiente</span>
                        <FaArrowCircleRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <div className="overflow-y-auto max-h-[500px]"> {/* Ajusta la altura máxima según tu diseño */}
                    <table className="w-full table-auto text-left rounded-md">
                        <thead className="sticky top-0 bg-lightTheme-background dark:bg-darkTheme-formulario">
                            <tr>
                                {tableHead.map((head: string) => (
                                    <th
                                        key={head}
                                        className="border-b uppercase border-gray-200 dark:border-gray-800 p-4"
                                    >
                                        <CustomTypography
                                            fontBold=''
                                            color=''
                                            fontSize="text-sm"
                                            className="leading-none opacity-70 text-darkTheme-formulario dark:text-darkTheme-text"
                                        >
                                            {head}
                                        </CustomTypography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-darkTheme-background">
                            {currentRows.map((row, index) => {
                                console.log('Row data:', row); // Verifica qué datos están en cada fila
                                return (
                                    <tr key={index} className="border-b border-gray-200 dark:border-gray-800 dark:hover:bg-darkTheme-formulario hover:cursor-pointer">
                                        {tableHead.map((key, cellIndex) => {
                                            console.log('Key:', key, 'Value:', row[key]); // Verifica si 'Descripcion' está presente
                                            return (
                                                <td key={cellIndex} className="px-6 py-3">
                                                    {Array.isArray(row[key]) ? (
                                                        <div className="flex space-x-2">
                                                            {row[key].map((action: Action, actionIndex: number) => (
                                                                <ActionButton
                                                                    key={actionIndex}
                                                                    icon={action.icon}
                                                                    onClick={action.onClick}
                                                                />
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <CustomTypography
                                                            fontBold=''
                                                            color=''
                                                            fontSize="text-sm"
                                                            className="leading-none text-lightTheme-gray dark:text-darkTheme-gray"
                                                        >
                                                            {row[key]}
                                                        </CustomTypography>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}
