import axios from 'axios';
import { Turno } from '../interfaces/TablasBD';


async function getTurno(): Promise<Turno[]> {
    try {
        const response = await fetch('http://localhost:9000/Turnos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

export default getTurno;
