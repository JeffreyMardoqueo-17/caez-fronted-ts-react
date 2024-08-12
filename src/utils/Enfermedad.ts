
import axios from 'axios';
import { Enfermedad } from '../interfaces/TablasBD';

const API_URL = 'http://localhost:3000/enfermedad';

export const getEnfermedades = async (): Promise<Enfermedad[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createEnfermedad = async (enfermedad: Omit<Enfermedad, 'Id'>): Promise<Enfermedad> => {
    const response = await axios.post(API_URL, enfermedad);
    return response.data;
};

export const updateEnfermedad = async (enfermedad: Enfermedad): Promise<Enfermedad> => {
    const response = await axios.put(`${API_URL}/${enfermedad.Id}`, enfermedad);
    return response.data;
};

//ESTO ES PARA PODER FILTRAR LAS ENFERMEDADES   
export const filtrarEnfermedades = (enfermedades: Enfermedad[], terminoBusqueda: string): Enfermedad[] => {
    return enfermedades.filter((elemento) => {
        return (
            // elemento.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            // elemento.Descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
            elemento.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
    });
};