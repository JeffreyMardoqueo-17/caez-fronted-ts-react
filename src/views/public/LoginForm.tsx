import React from 'react';
import Logo from '../../assets/png/logo-color.png'; // Asegúrate de que esta sea la ruta correcta

const LoginForm: React.FC = () => {
    return (
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-white dark:bg-darkTheme-formulario rounded-2xl shadow-xl">
            {/* Logo y Título */}
            <div className="flex flex-row gap-3 pb-4 justify-center items-center">
                <div>
                    <img src={Logo} width="76" alt="Logo" />
                </div>
                <h1 className="text-4xl font-bold text-black dark:text-white">Su empresa</h1>
            </div>

            {/* Formulario */}
            <form className="flex flex-col">
                {/* Campo de Correo Electrónico */}
                <div className="pb-2">
                    <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-400">Correo electrónico</label>
                    <div className="relative text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="pl-12 mb-2 bg-gray-50 dark:bg-darkTheme-input text-gray-600 dark:text-gray-300 border focus:border-transparent border-gray-300 dark:border-darkTheme-border sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 dark:focus:ring-darkTheme-border block w-full p-2.5 py-3 px-4"
                            placeholder="nombre@empresa.com"
                            autoComplete="off"
                        />
                    </div>
                </div>

                {/* Campo de Contraseña */}
                <div className="pb-6">
                    <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-400">Contraseña</label>
                    <div className="relative text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk">
                                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                <path d="M12 8v8"></path>
                                <path d="m8.5 14 7-4"></path>
                                <path d="m8.5 10 7 4"></path>
                            </svg>
                        </span>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••••"
                            className="pl-12 mb-2 bg-gray-50 dark:bg-darkTheme-input text-gray-600 dark:text-gray-300 border focus:border-transparent border-gray-300 dark:border-darkTheme-border sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 dark:focus:ring-darkTheme-border block w-full p-2.5 py-3 px-4"
                            autoComplete="new-password"
                            aria-autocomplete="list"
                        />
                    </div>
                </div>

                {/* Botón de Enviar */}
                <button
                    type="submit"
                    className="w-full text-white bg-[#8b5cf6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
                >
                    Inscribirse
                </button>

                {/* Texto de iniciar sesión */}
                <div className="text-base text-black dark:text-white text-center">
                    ¿Ya tienes una cuenta?{' '}
                    <a href="#" className="font-medium text-[#8b5cf6] hover:underline">
                        Iniciar sesión
                    </a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
