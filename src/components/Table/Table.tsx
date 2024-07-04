import React from 'react';
import { CustomTypography } from "../Forms/CustomTypography";
import { ActionButton } from "../inputs/Buttoom/ActionButton";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface TableProps {
    tableHead: string[];
    tableRows: { [key: string]: unknown }[];
}

export function Table({ tableHead, tableRows }: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full shadow-md table-auto text-left rounded-md">
                <thead>
                    <tr>
                        {tableHead.map((head: string) => (
                            <th
                                key={head}
                                className="border-b uppercase border-gray-200 dark:border-gray-800 bg-lightTheme-background dark:bg-darkTheme-formulario p-4"
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
                    {tableRows.map((row: { [key: string]: unknown }, index: number) => (
                        <tr
                            key={index}
                            className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-darkTheme-background"
                        >
                            {Object.keys(row).map((key: string, i: number) => (
                                <td key={i} className="p-4 sm:px-6 lg:px-8">
                                    {key === 'Acciones' ? (
                                        <div className="flex gap-2">
                                            {(row[key] as { icon: React.ReactNode, color: string, onClick: () => void }[]).map((action, actionIndex) => (
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
        </div>
    );
}
