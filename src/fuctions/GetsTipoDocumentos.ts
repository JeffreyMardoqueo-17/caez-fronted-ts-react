
import { TipoDocumento } from '../interfaces/TablasBD';
async function GetTiposDocumento(): Promise<TipoDocumento[]> {
  try {
    const response = await fetch('http://localhost:3000/TiposDocumento');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return [];
  }
}

export default GetTiposDocumento;
