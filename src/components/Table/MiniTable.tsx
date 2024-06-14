import { CircleStackIcon } from '@heroicons/react/24/solid';
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

const data = [
    {
        firstName: 'Viola',
        lastName: 'Amherd',
        status: 'active',
    },
    {
        firstName: 'Albert',
        lastName: 'Rösti',
        status: 'active',
    },
    {
        firstName: 'Beat',
        lastName: 'Jans',
        status: 'active',
    },
    {
        firstName: 'Ignazio',
        lastName: 'Cassis',
        status: 'active',
    },
    {
        firstName: 'Karin',
        lastName: 'Keller-Sutter',
        status: 'active',
    },
    {
        firstName: 'Guy',
        lastName: 'Parmelin',
        status: 'active',
    },
    
];

export function MiniTable() {
    return (
        <Card className='dark:border-gray-800 bg-blue-200 dark:bg-darkTheme-formulario mt-2'>
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Padrinos</h3>
            <Table className="mt-5 dark:border-gray-800 dark:bg-darkTheme-formulario">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>First Name</TableHeaderCell>
                        <TableHeaderCell>Last Name</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.firstName}>
                            <TableCell>{item.firstName}</TableCell>
                            <TableCell>{item.lastName}</TableCell>
                            <TableCell>
                                {item.status === 'active' ? (
                                    <Badge color="emerald">
                                        <CircleStackIcon className="h-5 w-5 mr-2" />
                                        {item.status}
                                    </Badge>
                                ) : (
                                    <Badge>{item.status}</Badge>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}