import React from 'react';
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

/**
 * Table component to display data in a tabular format.
 *
 * @param {TableProps} props - The props for the table component.
 * @param {string[]} props.tableHead - An array of strings representing the headers of the table.
 * @param {Array<{ [key: string]: string | Action[] }>} props.tableRows - An array of rows, where each row can contain strings or Action arrays.
 * @returns {JSX.Element} The Table component.
 */
export function Table({ tableHead, tableRows }: TableProps) {
    return (
        <div className="overflow-x-auto">
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
                    {tableRows.map((row, index) => (
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
