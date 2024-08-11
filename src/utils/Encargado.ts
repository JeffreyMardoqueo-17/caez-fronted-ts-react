import axios from 'axios';
import { Encargado } from '../interfaces/TablasBD';

// Obtener los datos de los encargados desde una API
export const getEncargados = async (): Promise<Encargado[]> => {
    try {
        const url = 'http://localhost:3000/Encargados';
        const respuesta = await axios.get<Encargado[]>(url);
        console.log('Datos de Encargados recibidos:', respuesta.data);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener los datos de Encargados:', error);
        throw error;
    }
};

// Filtrar los encargados por nombre y apellido
export const filtrarEncargados = (tablaEncargados: Encargado[], terminoBusqueda: string): Encargado[] => {
    try {
        return tablaEncargados.filter((elemento) => {
            return (
                elemento.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.Apellido.toLowerCase().includes(terminoBusqueda.toLowerCase())
            );
        });
    } catch (error) {
        console.error('Error al filtrar los datos de Encargados:', error);
        throw error;
    }
};
