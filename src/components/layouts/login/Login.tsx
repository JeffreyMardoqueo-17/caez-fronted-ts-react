// src/App.tsx
import React from 'react';
import 'tailwindcss/tailwind.css';
import Form from '../../Forms/Forms';
import Input from '../../inputs/Input/Input';
import Checkbox from '../../inputs/Checkbox/Checkbox';
import Button from '../../inputs/Buttoom/Buttoom.';
import { useTheme } from '../../hooks/theme/theme';

const Login: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`flex justify-center items-center min-w-80 min-h-screen ${theme === 'dark' ? 'dark' : ''} border-2 border-violet-700`}>
            <Form>
                <Input
                    id="email"
                    type="email"
                    label="Your email"
                    placeholder="name@flowbite.com"
                    required
                />
                <Input
                    id="password"
                    type="password"
                    label="Your password"
                    required
                />
                <Checkbox
                    id="remember"
                    label="Remember me"
                />
                <Button
                    type="submit"
                    label="Submit"
                />
            </Form>
        </div>
    );
};

export default Login;
