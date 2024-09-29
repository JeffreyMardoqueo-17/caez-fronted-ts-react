
import axios from 'axios';
import { Padrino } from '../interfaces/TablasBD';
//traigo a todos los padrinos
export const getPadrinos = async (): Promise<Padrino[]> => {
    try {
        const url = 'http://localhost:9000/padrinos';
        const respuesta = await axios.get<Padrino[]>(url);
        console.log('Datos recibidos:', respuesta.data);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
};

//esto es para fultrar a ls padrinos por nombre y apellido
export const filtrarPadrinos = (tablaPadrino: Padrino[], terminoBusqueda: string): Padrino[] => {
    try {
        return tablaPadrino.filter((elemento) => {
            return (
                elemento.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.Apellido.toLowerCase().includes(terminoBusqueda.toLowerCase())
            );
        });
    } catch (error) {
        console.error('Error al filtrar los datos:', error);
        throw error;
    }

};

//para crear a un nuevo padrino
export const createPadrino = async (nuevoPadrino: Omit<Padrino, 'Id' | 'FechaRegistro'>): Promise<void> => {
    try {
        const url = 'http://localhost:9000/padrinos';
        await axios.post(url, nuevoPadrino);
        console.log('Padrino creado exitosamente');
    } catch (error) {
        console.error('Error al crear el padrino:', error);
        throw error;
    }
};
