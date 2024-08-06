import React, { useState } from 'react';
import { CustomTypography } from "../Forms/CustomTypography";
import { ActionButton } from "../inputs/Buttoom/ActionButton";

interface TableProps {
    tableHead: string[];
    tableRows: { [key: string]: any }[];
}

export function TablePagination({ tableHead, tableRows }: TableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableRows.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(tableRows.length / itemsPerPage);

    const handleChangeItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to first page when changing items per page
    };

    return (
        <div>
            <table className="w-full min-w-full table-auto text-left rounded-md">
                <thead>
                    <tr>
                        {tableHead.map((head: string) => (
                            <th
                                key={head}
                                className="border-b uppercase border-gray-200 dark:border-gray-800 bg-slate-100 dark:bg-darkTheme-formulario p-4"
                            >
                                <CustomTypography
                                    variant=""
                                    fontBold="font-bold"
                                    fontSize="text-lg"
                                    className="text-gray-900 dark:text-darkTheme-text"
                                >
                                    {head}
                                </CustomTypography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-darkTheme-background cursor-pointer hover:bg-gray-200 dark:hover:bg-darkTheme-formulario"
                        >
                            {tableHead.map((key, cellIndex) => (
                                <td key={cellIndex} className="p-4">
                                    {key === 'Acciones' ? (
                                        <div className="flex gap-2">
                                            {row[key].map((action: { icon: React.ReactNode, color: string, onClick: () => void }, actionIndex: number) => (
                                                <ActionButton key={actionIndex} icon={action.icon} className={`bg-${action.color}-500 hover:bg-${action.color}-600`} onClick={action.onClick} />
                                            ))}
                                        </div>
                                    ) : (
                                        <CustomTypography variant="small" color="blue-gray" className="font-normal text-gray-800 dark:text-darkTheme-text">
                                            {String(row[key])}
                                        </CustomTypography>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <label htmlFor="itemsPerPage" className="mr-2">Registros por página:</label>
                    <select
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={handleChangeItemsPerPage}
                        className="border rounded p-1"
                    >
                        {[10, 20, 50, 100].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                    >
                        &laquo;
                    </button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button
                        onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
                    >
                        &raquo;
                    </button>
                </div>
            </div>
        </div>
    );
}
