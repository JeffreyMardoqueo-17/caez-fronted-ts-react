import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/solid';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import Logo from '../../assets/png/logo-no-background.png'; // Ruta del logo

interface MenuItem {
    title: string;
    icon: React.ReactNode;
    path?: string;
    submenu?: MenuItem[];
}

interface MultiLevelSidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

const menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: <PresentationChartBarIcon className="h-6 w-6" />, path: '/' },
    {
        title: 'Alumnos',
        icon: <UserCircleIcon className="h-6 w-6" />,
        submenu: [
            { title: 'List', path: '/Alumno', icon: <ChevronDownIcon className="h-4 w-4" /> },
            { title: 'Create', path: '/alumno/create', icon: <ChevronDownIcon className="h-4 w-4" /> },
        ],
    },
    {
        title: 'Encargados',
        icon: <UserCircleIcon className="h-6 w-6" />,
        path: '/Encargados',
    },
    {
        title: 'Tipo de Documento',
        icon: <InboxIcon className="h-6 w-6" />,
        path: '/TipoDocumento',
    },
    {
        title: 'Padrinos',
        icon: <UserCircleIcon className="h-6 w-6" />,
        submenu: [
            { title: 'List', path: '/padrino', icon: <ChevronDownIcon className="h-4 w-4" /> },
            { title: 'Create', path: '/padrino/create', icon: <ChevronDownIcon className="h-4 w-4" /> },
        ],
    },
    {
        title: 'Enfermedad',
        icon: <UserCircleIcon className="h-6 w-6" />,
        path: '/enfermedad',
    },
    {
        title: 'Confirmación',
        icon: <InboxIcon className="h-6 w-6" />,
        path: '/confirmar',
    },
    {
        title: 'Loader',
        icon: <Cog6ToothIcon className="h-6 w-6" />,
        path: '/Loader',
    }
];

export const MultiLevelSidebar: React.FC<MultiLevelSidebarProps> = ({ isSidebarOpen, toggleSidebar, toggleTheme, theme }) => {
    const [open, setOpen] = useState<number | null>(null);
    const location = useLocation(); // Para obtener la ruta actual

    const handleOpen = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div
            className={`transition-all duration-300 ease-in-out bg-white dark:bg-darkTheme-formulario text-black dark:text-white fixed top-0 left-0 h-screen z-40 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
        >
            <div className="flex flex-col h-full">
                {/* Logo en la parte superior */}
                <div className="flex items-center justify-center p-4 mt-[25%]">
                    <img
                        src={Logo}
                        alt="Logo"
                        className={`transition-all duration-300 ${isSidebarOpen ? 'w-32' : 'w-12'} h-auto`} // Cambia el tamaño del logo basado en si el sidebar está abierto o cerrado
                    />
                </div>

                {/* Menú de navegación */}
                <ul className="space-y-2 p-4 overflow-y-auto flex-grow">
                    {menuItems.map((item, index) => {
                        const isActive = item.path ? location.pathname === item.path : false;
                        const hasActiveSubmenu = item.submenu?.some(sub => location.pathname === sub.path);

                        return (
                            <li key={index} className="group">
                                {/* Si el item tiene una ruta (no es un submenú), usa NavLink directamente */}
                                {item.path && !item.submenu && (
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `flex items-center p-3 rounded-md cursor-pointer transition-colors duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 
                                            ${isActive ? 'bg-gray-200 dark:bg-gray-700 text-purple-500' : 'text-gray-600 dark:text-gray-400'}`
                                        }
                                    >
                                        <span className="flex justify-center w-12">
                                            {item.icon}
                                        </span>
                                        {isSidebarOpen && (
                                            <span className="ml-3 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                                {item.title}
                                            </span>
                                        )}
                                    </NavLink>
                                )}

                                {/* Si el item tiene un submenú */}
                                {item.submenu && (
                                    <>
                                        <div
                                            onClick={() => handleOpen(index)}
                                            className={`flex items-center p-3 rounded-md cursor-pointer transition-colors duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 
                                                ${hasActiveSubmenu ? 'bg-gray-200 dark:bg-gray-700 text-purple-500' : 'text-gray-600 dark:text-gray-400'}`}
                                        >
                                            <span className="flex justify-center w-12">
                                                {item.icon}
                                            </span>
                                            {isSidebarOpen && (
                                                <span className="ml-3 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                                    {item.title}
                                                </span>
                                            )}
                                            {item.submenu && isSidebarOpen && (
                                                <ChevronDownIcon className={`h-5 w-5 ml-auto transition-transform ${open === index ? 'rotate-180' : ''}`} />
                                            )}
                                        </div>

                                        {item.submenu && open === index && isSidebarOpen && (
                                            <ul className="pl-6 space-y-2">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                                                        <NavLink
                                                            to={subItem.path ?? ''}
                                                            className={({ isActive }) =>
                                                                `w-full block p-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-gray-200 dark:bg-gray-700 text-purple-500' : 'text-gray-600 dark:text-gray-400'}`
                                                            }
                                                        >
                                                            {subItem.title}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        );
                    })}
                    <li className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                        <PowerIcon className="h-6 w-6" />
                        {isSidebarOpen && (
                            <span className="ml-3 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">Log Out</span>
                        )}
                    </li>
                </ul>

                <div className="flex items-center justify-center p-4">
                    <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />
                </div>
            </div>
        </div>
    );
};
