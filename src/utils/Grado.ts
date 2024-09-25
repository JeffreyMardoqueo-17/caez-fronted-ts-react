import axios from 'axios';
import { Grado } from '../interfaces/TablasBD';


async function getGrados(): Promise<Grado[]> {
    try {
        const response = await fetch('http://localhost:9000/grados');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

export default getGrados;
