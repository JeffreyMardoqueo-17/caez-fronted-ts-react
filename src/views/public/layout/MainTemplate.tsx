import React, { useState } from 'react';
import Cabecera from '../../../components/header/Cabecera';
import { MultiLevelSidebar } from '../../../components/Sidebar/MultiLevelSidebar';

interface MainTemplateProps {
    children: React.ReactNode;
    sidebar?: React.ReactNode;
}


const MainTemplate: React.FC<MainTemplateProps> = ({ children, sidebar }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };


    return (
        <div className="flex flex-col min-h-screen bg-lightTheme-background dark:bg-darkTheme-background">
            <div className="relative">
                <Cabecera onToggleSidebar={toggleSidebar} />
                <div className={`fixed top-16 left-0 lg:hidden w-64 h-full bg-lightTheme-primary dark:bg-darkTheme-formulario text-black dark:text-light-50 z-40 transition-transform ${isSidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    {sidebar}
                </div>
            </div>
            <div className="flex flex-1 overflow-hidden mt-16">
                <div className="flex-1 p-4 bg-lightTheme-background dark:bg-darkTheme-background">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainTemplate;
