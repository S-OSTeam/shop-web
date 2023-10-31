import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';

interface CustomTextProps {
    content: string;
    className?: string;
    variant?: TypographyProps['variant'];
    align?: TypographyProps['align'];
    onClick?: () => void;
}

const CustomText = ({ content, className, variant, align, onClick }: CustomTextProps) => {
    return (
        <Typography className={classNames(className)} variant={variant} align={align} onClick={onClick}>
            {content}
        </Typography>
    );
};

CustomText.defaultProps = {
    variant: 'body1',
    align: 'left',
    onClick: undefined,
    className: undefined,
};

export default CustomText;
