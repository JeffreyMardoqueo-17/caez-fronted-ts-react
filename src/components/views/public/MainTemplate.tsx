import React from 'react';

interface MainTemplateProps {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ sidebar, header, children }) => {
    return (
        <div className="flex h-screen">
            <div className="w-64 bg-gray-800 text-white">{sidebar}</div>
            <div className="flex flex-col flex-1">
                <div className="bg-gray-200 dark:bg-darkTheme-background p-4">{header}</div>
                <div className="p-4 flex-1 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
};

export default MainTemplate;
