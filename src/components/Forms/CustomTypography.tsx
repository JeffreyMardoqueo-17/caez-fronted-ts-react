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
export const CustomTypography: FC<CustomTypographyProps> = ({ variant,fontSize,  children, fontBold }) => {
    return (
        <Typography
            className={`mb-2 ${fontBold} ${fontSize} text-darkTheme-background dark:text-darkTheme-gray`}
            placeholder="Placeholder"
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }} // Add the missing onPointerLeaveCapture property
            variant={undefined}
        >
            {children}
        </Typography>
    );
};
