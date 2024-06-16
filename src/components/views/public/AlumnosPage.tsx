import { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from '../../Table/Table' // Asegúrate de importar el componente Table desde la ruta correcta

export default function AlumnosPage() {
    const [Data, setData] = useState<any[]>([]) // Specify the type for Data as an array of any

    //para obteneer todos los alumnos
    useEffect(() => {
        const getAlumnos = async () => {
            const respuesta = await axios.get("http://localhost:5000/alumnos/");
            const data = respuesta.data;
            setData(data);
        }
        getAlumnos();
    }, [])

    const tableHead = ['Id', 'Nombre', 'Apellido', 'FechaNacimiento', 'IdSexo', 'IdRole', 'IdEncargado', 'IdEnfermedad', 'IdTipoDocumento', 'NumDocumento', 'IdGrado', 'IdTurno', 'IdAdministrador', 'IdPadrino', 'FechaRegistro', 'EsBecado', 'IdGrupo'];

    return (
        <>
        Hola mundo
        <Table tableHead={tableHead} tableRows={Data} />
        {
            console.log(Data)
        }
        </>
    )
}