import axios from "axios";
import { User } from "../interfaces/TablasBD";

const API_URL = 'http://localhost:3000/users/';

export const getAdministradores = async (): Promise<User[]> => {
    try {
        const response = await axios.get(API_URL);
        // console.log("La respuesta es:", response.data);
        return response.data;
    } catch (error) {
        console.error("El error es:", error);
    }
    return [];
};
