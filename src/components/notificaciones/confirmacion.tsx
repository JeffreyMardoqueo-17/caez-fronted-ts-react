import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
const Confirmacion = () => {
    return (

        <div className="space-y-5 items-center justify-center mt-20">
            <div className="relative mx-auto max-w-[400px] rounded-xl border border-secondary-50 dark:border-darkTheme-opacidad bg-lightTheme-primary dark:bg-darkTheme-formulario p-4 text-sm shadow-lg">
                <button className="ttop-4 absolute right-4 ml-auto text-secondary-500 dark:text-lightTheme-primary hover:text-secondary-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
                <div className="flex space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500">
                        <FaCheckCircle className='text-2xl'/>
                    </div>
                    <div className="flex-1">
                        <h4 className="pr-6 text-2xl text-secondary-900 dark:text-darkTheme-primary">¡EXCELENTE!</h4>
                        <div className="mt-1 text-lightTheme-gray text-base dark:text-darkTheme-gray">Registro Hecho con exito</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Confirmacion;
