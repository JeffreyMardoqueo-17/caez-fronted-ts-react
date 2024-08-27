
import axios from 'axios';
import { Alumno } from '../interfaces/TablasBD';

export const getAlumnos = async (): Promise<Alumno[]> => {
    try {
        const url = 'http://localhost:3000/Alumnos';
        const respuesta = await axios.get<Alumno[]>(url);
        console.log('Datos recibidos:', respuesta.data);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
};

//para crear a un nuevo alumno
export const createAlumno = async (nuevoAlumno: Omit<Alumno, 'Id' | 'FechaRegistro'>): Promise<void> => {
    try {
        const url = 'http://localhost:3000/alumnos';
        await axios.post(url, nuevoAlumno);
        console.log('Alumno creado exitosamente');
    } catch (error) {
        console.error('Error al crear el Alumno:', error);
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
