import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AlumnosPage from '../components/views/public/Alumno/AlumnosPage';

const Alumnosroutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/alumnos" element={<AlumnosPage />} />
        </Routes>
    );
};
export default Alumnosroutes;