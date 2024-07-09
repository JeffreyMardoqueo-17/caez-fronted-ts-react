import React from 'react';
import { CustomTypography } from '../CustomTypography'
import { Alumno } from '../../../interfaces/TablasBD';

interface AlumnoFormProps {
    alumno: Alumno; // Tipo de datos para el objeto alumno
}

export const AlumnoForm: React.FC<AlumnoFormProps> = ({ alumno }) => {
    return (
        <div>
            <div className="mb-4">
                <CustomTypography variant="small" color="blue-gray" className="font-bold">
                    Nombre:
                </CustomTypography>
                <CustomTypography variant="small" color="blue-gray">
                    {alumno.Nombre}
                </CustomTypography>
            </div>
            <div className="mb-4">
                <CustomTypography variant="small" color="blue-gray" className="font-bold">
                    Apellido:
                </CustomTypography>
                <CustomTypography variant="small" color="blue-gray">
                    {alumno.Apellido}
                </CustomTypography>
            </div>
            <div className="mb-4">
                <CustomTypography variant="small" color="blue-gray" className="font-bold">
                    Encargado:
                </CustomTypography>
                <CustomTypography variant="small" color="blue-gray">
                    {alumno.Encargado}
                </CustomTypography>
            </div>
            <div className="mb-4">
                <CustomTypography variant="small" color="blue-gray" className="font-bold">
                    Tipo de Documento:
                </CustomTypography>
                <CustomTypography variant="small" color="blue-gray">
                    {alumno.TipoDocumento}
                </CustomTypography>
            </div>
            <div className="mb-4">
                <CustomTypography variant="small" color="blue-gray" className="font-bold">
                    Número de Documento:
                </CustomTypography>
                <CustomTypography variant="small" color="blue-gray">
                    {alumno.NumDocumento}
                </CustomTypography>
            </div>
            {/* Agregar más campos según las propiedades del objeto Alumno */}
        </div>
    );
};
