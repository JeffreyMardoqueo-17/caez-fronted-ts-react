import React, { useState } from 'react';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

interface MenuItem {
    title: string;
    submenu?: MenuItem[];
}

interface MultiLevelSidebarProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

const menuItems: MenuItem[] = [
    { title: 'Dashboard' },
    { title: 'Users', submenu: [{ title: 'List' }, { title: 'Create' }] },
    { title: 'Settings', submenu: [{ title: 'Profile' }, { title: 'Billing' }] },
    { title: 'Reports' }
];

export const MultiLevelSidebar: React.FC<MultiLevelSidebarProps> = ({ toggleTheme, theme }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleSubmenuToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-lightTheme-background dark:bg-darkTheme-formulario text-white min-h-full h-full w-full overflow-hi'>
            <div className='p-4'>
                <h1 className='text-lg font-bold mb-4'>Sidebar Menu</h1>
                <ul className='space-y-2'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <div
                                className='flex justify-between items-center cursor-pointer p-2 hover:bg-gray-700'
                                onClick={() => item.submenu && handleSubmenuToggle(index)}
                            >
                                <span>{item.title}</span>
                                {item.submenu && (
                                    <span>{openIndex === index ? '-' : '+'}</span>
                                )}
                            </div>
                            {item.submenu && openIndex === index && (
                                <ul className='pl-4 space-y-1'>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className='cursor-pointer p-2 hover:bg-gray-700'>
                                            {subItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Agrega el componente ThemeToggleButton al final del sidebar */}
            <div className='flex items-center justify-center mt-3'>
                <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />
            </div>
        </div>
    );
};

