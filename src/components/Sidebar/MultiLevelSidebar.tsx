import React, { useState } from 'react';
import { PresentationChartBarIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

interface MenuItem {
    title: string;
    icon: React.ReactNode;
    submenu?: MenuItem[];
}

interface MultiLevelSidebarProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

const menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: <PresentationChartBarIcon className="h-6 w-6" /> },
    {
        title: 'Users',
        icon: <UserCircleIcon className="h-6 w-6" />,
        submenu: [
            { title: 'List', icon: <ChevronRightIcon className="h-4 w-4" /> },
            { title: 'Create', icon: <ChevronRightIcon className="h-4 w-4" /> }
        ]
    },
    {
        title: 'Settings',
        icon: <Cog6ToothIcon className="h-6 w-6" />,
        submenu: [
            { title: 'Profile', icon: <ChevronRightIcon className="h-4 w-4" /> },
            { title: 'Billing', icon: <ChevronRightIcon className="h-4 w-4" /> }
        ]
    },
    { title: 'Reports', icon: <InboxIcon className="h-6 w-6" /> }
];

export const MultiLevelSidebar: React.FC<MultiLevelSidebarProps> = ({ toggleTheme, theme }) => {
    const [open, setOpen] = useState<number | null>(null);

    const handleOpen = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="h-full fixed w-2/12 max-w-[20rem] p-4 bg-lightTheme-background dark:bg-darkTheme-formulario text-black dark:text-white">
            <div className="mb-2 p-4">
                <h1 className="text-xl font-bold text-blue-gray-900 dark:text-white">Sidebar</h1>
            </div>
            <ul className="space-y-3">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <div
                            className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            onClick={() => handleOpen(index)}
                        >
                            <div className="flex items-center">
                                {item.icon}
                                <span className="ml-3 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">{item.title}</span>
                            </div>
                            {item.submenu && (
                                <ChevronDownIcon className={`h-5 w-5 transition-transform ${open === index ? "rotate-180" : ""}`} />
                            )}
                        </div>
                        {item.submenu && open === index && (
                            <ul className="pl-6 space-y-2">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex} className="flex items-center cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 group">
                                        {subItem.icon}
                                        <span className="ml-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">{subItem.title}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
                <li className="flex items-center cursor-pointer p-3 hover:bg-gray-200 dark:hover:bg-gray-700 group">
                    <PowerIcon className="h-6 w-6" />
                    <span className="ml-3 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">Log Out</span>
                </li>
            </ul>
            <div className="flex items-center justify-center mt-4">
                <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />
            </div>
        </div>
    );
};
