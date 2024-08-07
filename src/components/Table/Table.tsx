import React, { useState } from 'react';
import { CustomTypography } from "../Forms/CustomTypography";
import { ActionButton } from "../inputs/Buttoom/ActionButton";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface Action {
    icon: React.ReactNode;
    onClick: () => void;
}

interface TableProps {
    tableHead: string[];
    tableRows: Array<{ [key: string]: string | Action[] }>;
}

export function Table({ tableHead, tableRows }: TableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalPages = Math.ceil(tableRows.length / itemsPerPage);

    const handleChangePage = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
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
                <div>
                    <label htmlFor="itemsPerPage" className="mr-2">Mostrar:</label>
                    <select
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={handleChangeItemsPerPage}
                        className="border rounded p-1"
                    >
                        {[10, 20, 30, 50, 100].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button
                        onClick={() => handleChangePage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border rounded px-2 py-1 mr-2"
                    >
                        Anterior
                    </button>
                    <span>{`Página ${currentPage} de ${totalPages}`}</span>
                    <button
                        onClick={() => handleChangePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="border rounded px-2 py-1 ml-2"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
            <table className="w-full table-auto text-left rounded-md">
                <thead>
                    <tr>
                        {tableHead.map((head: string) => (
                            <th
                                key={head}
                                className="border-b uppercase border-gray-200 dark:border-gray-800 bg-lightTheme-background dark:bg-darkTheme-formulario p-4 justify-center items-center"
                            >
                                <CustomTypography
                                    fontBold=''
                                    color=''
                                    fontSize="text-sm"
                                    className="leading-none opacity-70 text-darkTheme-formulario dark:text-darkTheme-text items-center justify-center"
                                >
                                    {head}
                                </CustomTypography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-800 dark:hover:bg-darkTheme-formulario hover:cursor-pointer">
                            {tableHead.map((key, cellIndex) => (
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
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
