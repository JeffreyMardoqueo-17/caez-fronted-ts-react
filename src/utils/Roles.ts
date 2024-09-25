import axios from 'axios';
import { Role } from '../interfaces/TablasBD';

const API_URL = 'http://localhost:9000/role/';

export const getRoles = async (): Promise<Role[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};
