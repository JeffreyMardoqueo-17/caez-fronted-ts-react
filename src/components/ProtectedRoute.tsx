// src/components/ProtectedRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    isLoggedIn: boolean;
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn, children }) => {
    // Si no está logueado, redirigir al login
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    // Si está logueado, mostrar el contenido (children)
    return <>{children}</>;
};

export default ProtectedRoute;
