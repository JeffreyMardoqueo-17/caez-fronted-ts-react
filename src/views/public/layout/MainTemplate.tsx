import React from 'react';

interface MainTemplateProps {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ sidebar, header, children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-lightTheme-background dark:bg-darkTheme-background">
            <div className="bg-lightTheme-background dark:bg-darkTheme-formulario dark:text-light-50 w-full z-10 fixed top-0 h-16">
                {header}
            </div>
            <div className="flex flex-1 overflow-hidden mt-16">
                <div className="hidden lg:block lg:w-1/6 bg-lightTheme-primary dark:bg-darkTheme-formulario text-black dark:text-light-50 h-full">
                    {sidebar}
                </div>
                <div className="flex-1 p-4 bg-lightTheme-background dark:bg-darkTheme-background">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainTemplate;
