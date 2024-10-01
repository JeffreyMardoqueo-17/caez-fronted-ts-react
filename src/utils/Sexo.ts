import axios from 'axios';
import { Sexo } from '../interfaces/TablasBD';

const API_URL = 'http://localhost:9000/sexos';

// export const  = async (): Promise<Sexo[]> => {
//     const response = await axios.get(API_URL);
//     return response.data;
// };

// Obtener los datos de los encargados desde una API
export const getSexos = async (): Promise<Sexo[]> => {
    try {
        const url = 'http://localhost:9000/Sexos';
        const respuesta = await axios.get<Sexo[]>(url);
        console.log('Datos de Sexos recibidos:', respuesta.data);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener los datos de Sexos:', error);
        throw error;
    }
};