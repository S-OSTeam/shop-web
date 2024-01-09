import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';

interface AtomProps extends TypographyProps {
    text?: string | undefined;
    className?: string;
    variant?: TypographyProps['variant'];
    align?: TypographyProps['align'];
    onClick?: () => void;
}

const TextComponent = ({ text, className, variant, align, onClick }: AtomProps) => {
    return variant ? (
        <Typography className={classNames(className)} variant={variant} align={align} onClick={onClick}>
            {text}
        </Typography>
    ) : (
        <span className={classNames(className)} aria-hidden="true" onClick={onClick}>
            {text}
        </span>
    );
};

// 프로토타입 지정 prototype, PropType
TextComponent.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
    ]),
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    onClick: PropTypes.func,
};

TextComponent.defaultProps = {
    text: undefined,
    className: ``,
    variant: null,
    align: 'inherit',
    onClick: () => {},
};
export default TextComponent;
