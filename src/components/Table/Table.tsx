import { Typography } from "@material-tailwind/react";
import { CustomTypography } from "../Forms/CustomTypography";
import { FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

interface TableProps {
    tableHead: string[];
    tableRows: { [key: string]: unknown }[];
}

export function Table({ tableHead, tableRows }: TableProps) {
    return (
        <table className="w-full min-w-max table-auto text-left rounded-md ">
            <thead>
                <tr>
                    {tableHead.map((head: string) => (
                        <th
                            key={head}
                            className="border-b border-gray-200 dark:border-gray-800 bg-blue-200 dark:bg-darkTheme-formulario p-4"
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
                        className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-darkTheme-formulario cursor-pointer hover:bg-gray-200 dark:hover:bg-darkTheme-background "
                    >
                        {Object.values(row).map((value: unknown, i: number) => (
                            <td key={i} className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal text-gray-800 dark:text-darkTheme-text">
                                    {String(value)}
                                </Typography>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}