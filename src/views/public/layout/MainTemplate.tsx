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
            <Cabecera onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar siempre visible en pantallas grandes */}
                <div className={`fixed top-16 left-0 h-full bg-lightTheme-primary dark:bg-darkTheme-formulario text-black dark:text-light-50 z-40 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } w-{4%}`}>
                    {sidebar}
                </div>
                {/* Contenido principal */}
                <div className="flex-1 p-4 bg-lightTheme-background dark:bg-darkTheme-background mt-16 lg:ml-64">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainTemplate;
