import React from 'react';
import { Cabecera } from '../../header/Cabecera';

interface MainTemplateProps {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ sidebar, header, children }) => {
    return (
        <div className="flex min-h-screen bg-darkTheme-border">
            <div className="w-2/12 bg-lightTheme-background dark:bg-darkTheme-formulario text-black dark:text-light-50">
                {sidebar}
            </div>
            <div className="flex flex-col flex-1">
                <div className="bg-lightTheme-background dark:bg-darkTheme-formulario dark:text-light-50 fixed top-0 w-full z-10">
                    <Cabecera />
                </div>
                <div className="p-2 pt-16 flex-1 overflow-y-auto bg-white dark:bg-darkTheme-background">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainTemplate;


