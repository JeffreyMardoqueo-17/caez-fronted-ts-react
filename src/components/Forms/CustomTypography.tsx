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
 * @returns {JSX.Element} Componente de tipografía personalizada.
 */
export const CustomTypography: FC<CustomTypographyProps> = ({ variant, children }) => {
    return (
        <Typography
            className="mb-2 font-medium font-bold text-darkTheme-background  dark:text-darkTheme-gray"
            placeholder="Placeholder"
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
            variant={variant} >
            {children}
        </Typography>
    );
};
