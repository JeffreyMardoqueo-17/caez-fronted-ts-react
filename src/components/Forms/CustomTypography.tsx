import React, { FC } from 'react';
import { Typography } from '@material-tailwind/react';
import { CustomTypographyProps } from '../../interfaces/CustomTypographyProps';

/**
 * Componente de tipografía personalizada.
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.variant - Variante de la tipografía.
 * @param {ReactNode} props.children - Contenido del componente.
 * @param {string} props.fontSize - Tamaño de la fuente.
 * @param {string} props.fontBold - Peso de la fuente.
 * @param {string} props.className - Clases CSS adicionales.
 * @param {string} props.color - Color de la fuente.
 * @returns {JSX.Element} Componente de tipografía personalizada.
 */
export const CustomTypography: FC<CustomTypographyProps> = ({ fontSize, children, fontBold, className = '', color }) => {
    return (
        <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className={`mb-2 ${fontBold} ${fontSize} ${color} ${className}`}

        >
            {children}
        </Typography>
    );
};
