import React, { useState } from 'react';
import { useTheme } from '../../../hooks/theme';
import logoClaro from '../../../assets/png/logo-color.png';
import logoOscuro from '../../../assets/png/logo-no-background.png';

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const { theme } = useTheme();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert("Si funcionó: " + data);
                onLogin();
            } else {
                alert("No funcionó");
                console.error('Error en la solicitud');
            }
        } catch (error) {
            alert("No funcionó");
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return (
        <div className={`gradient-form h-full ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="container h-full p-10">
                <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-darkTheme-formulario">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* Left column container */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        {/* Logo */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src={(theme === 'dark') ? logoOscuro : logoClaro}
                                                alt="logo"
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                We are The Lotus Team
                                            </h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p className="mb-4">Please login to your account</p>
                                            {/* Email input */}
                                            <div className="relative mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={loginData.email}
                                                    onChange={handleChange}
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300"
                                                    placeholder="Email"
                                                    required
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400"
                                                >
                                                    Email
                                                </label>
                                            </div>
                                            {/* Password input */}
                                            <div className="relative mb-4">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={loginData.password}
                                                    onChange={handleChange}
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300"
                                                    placeholder="Password"
                                                    required
                                                />
                                                <label
                                                    htmlFor="password"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400"
                                                >
                                                    Password
                                                </label>
                                            </div>
                                            {/* Submit button */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    type="submit"
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2"
                                                    style={{
                                                        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                                                    }}
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Right column container */}
                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{
                                        background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                                    }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

// https://flowbite-admin-dashboard.vercel.app/