import axios from 'axios';
import { Direccion } from '../interfaces/TablasBD';

const API_URL = 'http://localhost:9000/direcciones/';

export const getDirecciones = async (): Promise<Direccion[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};
