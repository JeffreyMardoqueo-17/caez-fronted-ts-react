import React, { useState, useEffect } from 'react';
import { MultiLevelSidebar } from '../../../components/Sidebar/MultiLevelSidebar';
import Cabecera from '../../../components/header/Cabecera';
import { useTheme } from '../../../hooks/theme'; // Asegúrate de que esta sea la forma correcta de importar el hook de tema

interface MainTemplateProps {
    children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Hook para manejar el tema

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`flex min-h-screen ${theme === 'dark' ? 'dark' : ''} bg-lightTheme-background dark:bg-darkTheme-background`}>
            {/* Sidebar */}
            <MultiLevelSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} theme={theme} />

            {/* Contenedor principal */}
            <div className="flex flex-col flex-1 transition-all duration-300">
                {/* Header */}
                <Cabecera onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

                {/* Espacio para el contenido */}
                <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'} bg-lightTheme-background dark:bg-darkTheme-background mt-[4%]`}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainTemplate;
