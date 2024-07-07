import React from 'react';
import { CustomTypography } from "../Forms/CustomTypography";
import { ActionButton } from "../inputs/Buttoom/ActionButton";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface Action {
    icon: React.ReactNode;
    color: string;
    onClick: () => void;
}
interface TableProps {
    tableHead: string[];
    tableRows: (string | Action[])[];
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
                                    fontSize="text-sm"
                                    className="leading-none opacity-70 text-lightTheme-text dark:text-darkTheme-text"
                                >
                                    {head}
                                </CustomTypography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((row: (string | Action[]), index: number) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-800">
                            {row.map((cell: string | Action[], cellIndex: number) => (
                                <td key={cellIndex} className="px-6 py-3">
                                    {Array.isArray(cell) ? (
                                        <div className="flex space-x-2">
                                            {cell.map((action, actionIndex) => (
                                                <ActionButton
                                                    key={actionIndex}
                                                    icon={action.icon}
                                                    onClick={action.onClick}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <CustomTypography
                                            variant=""
                                            fontSize="text-sm"
                                            className="leading-none text-lightTheme-text dark:text-darkTheme-text"
                                        >
                                            {cell}
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
