
import axios from 'axios';
import { Alumno } from '../interfaces/TablasBD';

export const getAlumnos = async (): Promise<Alumno[]> => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos/';
        const respuesta = await axios.get<Alumno[]>(url);
        console.log('Datos recibidos:', respuesta.data);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
};

//esto es para fultrar a ls alumnos por nombre y apellido
export const filtrarAlumnos = (tablaAlumnos: Alumno[], terminoBusqueda: string): Alumno[] => {
    try {
        return tablaAlumnos.filter((elemento) => {
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
