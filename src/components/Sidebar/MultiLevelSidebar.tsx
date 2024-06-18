import React, { useState } from 'react';

interface MenuItem {
    title: string;
    submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
    { title: 'Dashboard' },
    { title: 'Users', submenu: [{ title: 'List' }, { title: 'Create' }] },
    { title: 'Settings', submenu: [{ title: 'Profile' }, { title: 'Billing' }] },
    { title: 'Reports' }
];

export const MultiLevelSidebar = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleSubmenuToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-lightTheme-background dark:bg-darkTheme-formulario text-white h-full w-full overflow-hidden'>
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
        </div>
    );
};
