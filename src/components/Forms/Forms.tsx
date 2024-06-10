import React, { ReactNode } from 'react';

interface FormProps {
    children: ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => (
    <form className="w-full max-w-md mx-auto bg-lightTheme-background p-6 rounded-lg shadow-lg dark:bg-darkTheme-background">
        {children}
    </form>
);

export default Form;
