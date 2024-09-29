// src/routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../views/public/Home/Dashboard';
import ShowTipoDocumento from '../components/showTipoDocumento/ShowTipoDocumento';
import AlumnoCreate from '../views/public/Alumno/AlumnoCreate';
import EncargadoPage from '../views/public/Encargado/EncargadoPage';
import Loader from '../views/public/Loader';
import Confirmacion from '../components/notificaciones/confirmacion';
import EnfermedadPage from '../views/public/Enfermedad/EnfermedadPage ';
import PadrinosPage from '../views/public/Padrinos/PadrinosPage';
import PadrinoCreate from '../views/public/Padrinos/PadrinoCreate';
import { RoutePaths } from './RoutePaths';
import AlumnosPage from '../views/public/Alumno/AlumnosPage';
import LoginForm from '../views/public/LoginForm';

const RoutesComponent: React.FC = () => {
    return (
        <Routes>
            <Route path={RoutePaths.DASHBOARD} element={<Dashboard />} />
            <Route path={RoutePaths.TIPO_DOCUMENTO} element={<ShowTipoDocumento />} />
            <Route path={RoutePaths.ALUMNO_CREATE} element={<AlumnoCreate />} />
            <Route path={RoutePaths.Alumno} element={<AlumnosPage />} />
            <Route path={RoutePaths.ENCARGADO} element={<EncargadoPage />} />
            <Route path={RoutePaths.LOADER} element={<Loader />} />
            <Route path={RoutePaths.ENFERMEDAD} element={<EnfermedadPage />} />
            <Route path={RoutePaths.CONFIRMACION} element={<Confirmacion />} />
            <Route path={RoutePaths.PADRINO_CREATE} element={<PadrinoCreate />} />
            <Route path={RoutePaths.Padrino} element={<PadrinosPage />} />
            <Route path={RoutePaths.Login} element={<LoginForm />} />
        </Routes>
    );
};

export default RoutesComponent;

