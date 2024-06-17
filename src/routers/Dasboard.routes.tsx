import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/views/public/Dashboard';


const Dasboardroutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    )
}

export default Dasboardroutes;