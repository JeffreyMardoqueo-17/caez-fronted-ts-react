import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import Logo from '../../assets/png/logo-color.png';
import axios from 'axios';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!email || !password) {
            setErrorMessage('Por favor, complete ambos campos');
            return;
        }

        try {
            const response = await axios.post('http://localhost:9000/login', {
                Login: email,
                Password: password,
            });

            console.log('Respuesta de la API:', response.data);

            if (response.data.token) {
                // Guardar el token en localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                console.log('Token guardado:', response.data.token);

                // Forzar una recarga completa de la página para que el token sea detectado
                window.location.reload(); // Recarga la página
            } else {
                setErrorMessage('No se recibió un token válido');
            }
        } catch (error) {
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
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••••"
                            className="pl-12 mb-2 bg-gray-50 dark:bg-darkTheme-input text-gray-600 dark:text-gray-300 border focus:border-transparent border-gray-300 dark:border-darkTheme-border sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 dark:focus:ring-darkTheme-border block w-full p-2.5 py-3 px-4"
                            autoComplete="new-password"
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
