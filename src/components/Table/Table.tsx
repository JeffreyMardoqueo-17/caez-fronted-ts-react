import { Card, Typography } from "@material-tailwind/react";
import { CustomTypography } from "../Forms/CustomTypography";
import { PencilIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["Name", "Job", "Employed", "Acciones"];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

export function Table() {
    return (
        <table className="w-full min-w-max table-auto text-left rounded-md ">
            <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
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
                {TABLE_ROWS.map(({ name, job, date }, index) => (
                    <tr
                        key={name}
                        className="bg-white dark:bg-darkTheme-formulario cursor-pointer hover:bg-gray-200 dark:hover:bg-darkTheme-background "
                    >
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal text-gray-800 dark:text-darkTheme-text">
                                {name}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal text-gray-800 dark:text-darkTheme-text">
                                {job}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal text-gray-800 dark:text-darkTheme-text">
                                {date}
                            </Typography>
                        </td>
                        <td className="p-4 flex justify-center items-center space-x-2">
                            <div className="bg-green-500 rounded-2xl flex justify-center items-center text-center w-auto p-2 hover:bg-green-600 transition duration-300 ease-in-out">
                                <a href="#" className="text-white">
                                    <PencilIcon className="h-5 w-5" />
                                </a>
                            </div>
                            <div className="bg-yellow-500 rounded-2xl flex justify-center items-center text-center w-auto p-2 hover:bg-yellow-600 transition duration-300 ease-in-out">
                                <a href="#" className="text-white">
                                    <PencilIcon className="h-5 w-5" />
                                </a>
                            </div>
                            <div className="bg-red-600 rounded-2xl flex justify-center items-center text-center w-auto p-2 hover:bg-red-700 transition duration-300 ease-in-out">
                                <a href="#" className="text-white">
                                    <PencilIcon className="h-5 w-5" />
                                </a>
                            </div>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}
