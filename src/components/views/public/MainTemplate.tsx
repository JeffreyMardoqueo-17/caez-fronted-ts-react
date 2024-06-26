import React from 'react';
import Cabecera from '../../header/Cabecera';

interface MainTemplateProps {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ sidebar, header, children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-darkTheme-border">
            <div className="bg-lightTheme-background dark:bg-darkTheme-formulario dark:text-light-50 w-full z-10 fixed top-0">
                <Cabecera />
            </div>
            <div className="flex flex-1 pt-16">
                <div className="w-2/12  text-black dark:text-light-50">
                    {sidebar}
                </div>
                <div className="flex-1 p-2 overflow-y-auto bg-lightTheme-background dark:bg-darkTheme-background">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainTemplate;
