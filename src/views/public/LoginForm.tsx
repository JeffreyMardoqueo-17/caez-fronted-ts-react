import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import Logo from '../../assets/png/logo-color.png';
import axios from 'axios';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState(''); // Maneja el estado del campo de correo
    const [password, setPassword] = useState(''); // Maneja el estado del campo de contraseña
    const [errorMessage, setErrorMessage] = useState(''); // Para mostrar mensajes de error
    const navigate = useNavigate(); // Inicializa useNavigate para redirigir

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Previene que el formulario se envíe de forma tradicional

        // Validar campos vacíos
        if (!email || !password) {
            setErrorMessage('Por favor, complete ambos campos');
            return;
        }

        try {
            // Enviar los datos al backend para autenticación
            const response = await axios.post('http://localhost:9000/login', {
                Login: email,
                Password: password,
            });

            // Procesar la respuesta
            if (response.data.token) {
                // Guardar el token y la información del usuario en el localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user)); // Guardamos los datos del usuario
                console.log('Token guardado:', response.data.token);
                console.log('Usuario guardado:', response.data.user);

                // Limpiar los campos y los errores
                setEmail('');
                setPassword('');
                setErrorMessage('');

                // Redirigir a la vista principal "/"
                navigate('/'); // Redirige al usuario a la ruta raíz
            }
        } catch (error) {
            // Manejar errores (como credenciales incorrectas)
            setErrorMessage('Error en el inicio de sesión. Por favor, verifique sus credenciales.');
            console.error('Error de inicio de sesión:', error);
        }
    };

    return (
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-white dark:bg-darkTheme-formulario rounded-2xl shadow-xl">
            {/* Logo y Título */}
            <div className="flex flex-row gap-3 pb-4 justify-center items-center">
                <div>
                    <img src={Logo} width="76" alt="Logo" />
                </div>
            </div>

            {/* Mensaje de error */}
            {errorMessage && (
                <div className="text-red-500 mb-4 text-center">
                    {errorMessage}
                </div>
            )}

            {/* Formulario */}
            <form className="flex flex-col" onSubmit={handleSubmit}>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Actualiza el valor del email
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Actualiza el valor de la contraseña
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
                    Iniciar sesión
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
