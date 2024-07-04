import React from 'react';
interface MainTemplateProps {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    children: React.ReactNode;
}
const MainTemplate: React.FC<MainTemplateProps> = ({ sidebar, header, children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-lightTheme-background dark:bg-darkTheme-background">
            <div className="bg-lightTheme-background dark:bg-darkTheme-formulario dark:text-light-50 w-full z-10 fixed top-0 h-7">
                {header}
            </div>
            <div className="flex flex-1 overflow-hidden mt-10">
                <div className="w-2/12 bg-lightTheme-primary dark:bg-darkTheme-formulario text-black dark:text-light-50 h-full overflow-hidden">
                    {sidebar}
                </div>
                <div className="flex-1 p-4 overflow-auto bg-lightTheme-background dark:bg-darkTheme-background">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default MainTemplate;

