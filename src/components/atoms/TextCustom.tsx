import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface CustomTextProps {
    text: string | undefined;
    className?: string;
    variant?: TypographyProps['variant'];
    align?: TypographyProps['align'];
    onClick?: () => void;
}
const CustomText  = ({ ...props }: CustomTextProps) => {
    const {
        text,
        className,
        variant,
        align,
        onClick,
    } = props;
    return (

        variant ?
            <Typography
                className={classNames(className)}
                variant={variant}
                align={align}
                onClick={onClick}>
                {text}
            </Typography>
            :
            <span className={classNames(className)}
                  aria-hidden='true'
                  onClick={onClick}>
                    {text}
            </span>
    );
};

// 프로토타입 지정 prototype, PropType
CustomText.prototype = {
    text: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline']),
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    onClick: PropTypes.func,

};
CustomText.defaultProps = {
    className: '',
    variant: null,
    align: 'inherit',
    onClick: () => {
    },
};
export default CustomText;
