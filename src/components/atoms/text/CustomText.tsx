import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';

interface CustomTextProps {
    content: string;
    className?: string;
    variant?: TypographyProps['variant'];
    align?: TypographyProps['align'];
    onclick?: () => void;
}

const CustomText = ({ content, className, variant, align, onclick }: CustomTextProps) => {
    return (
        <Typography className={classNames(className)} variant={variant} align={align} onClick={onclick}>
            {content}
        </Typography>
    );
};

CustomText.defaultProps = {
    variant: 'body1',
    align: 'left',
    onclick: undefined,
    className: undefined,
};

export default CustomText;
