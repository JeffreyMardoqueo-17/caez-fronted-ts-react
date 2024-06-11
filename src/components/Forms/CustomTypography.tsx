import React, { FC } from 'react';
import { Typography } from '@material-tailwind/react';
import { CustomTypographyProps } from '../../interfaces/CustomTypographyProps';

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
