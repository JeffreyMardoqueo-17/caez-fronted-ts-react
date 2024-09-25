import axios from 'axios';
import { Sexo } from '../interfaces/TablasBD';

const API_URL = 'http://localhost:9000/sexos';

export const getSexos = async (): Promise<Sexo[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};
