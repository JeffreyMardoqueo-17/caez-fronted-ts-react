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
        <Card className="h-full w-full overflow-scroll shadow-lg rounded-lg">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-gray-200 dark:border-darkTheme-gray bg-gray-300 dark:bg-darkTheme-formulario p-4"
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
                            className={`even:bg-gray-50 dark:even:bg-darkTheme-background ${
                                index % 2 === 0 ? "bg-white dark:bg-darkTheme-formulario" : "bg-gray-50 dark:bg-darkTheme-background"
                            } hover:bg-gray-200 dark:hover:bg-darkTheme-background`}
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
                            <td className="p-4">
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600">
                                    <PencilIcon className="h-5 w-5" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
