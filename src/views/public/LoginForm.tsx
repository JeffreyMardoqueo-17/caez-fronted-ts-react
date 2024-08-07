import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Importa directamente jwt-decode

interface LoginFormProps {
    setIsLoggedIn: (value: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsLoggedIn }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', {
                Login: login,
                Password: password
            });

            const { token } = response.data;

            // Almacenar el token en el localStorage
            localStorage.setItem('authToken', token);

            // Decodificar el token para obtener los datos del usuario
            const decodedToken: any = jwtDecode(token); // Asegúrate de que el tipo coincida con los datos del token

            // Actualizar el estado de autenticación
            setIsLoggedIn(true);

            // Redireccionar a la página principal
            navigate('/home');

            // Mostrar un mensaje de alerta con el nombre y apellido del usuario
            alert(`Usuario logueado: ${decodedToken.name} ${decodedToken.lastName}`);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Login fallido, por favor intenta de nuevo.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Login:</label>
                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
