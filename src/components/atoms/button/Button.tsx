import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Button.module.scss';

interface ButtonProps extends MuiButtonProps {
    id?: string;
    className?: string;
    variant?: MuiButtonProps['variant'];
    children: React.ReactNode;
    onClick?: MuiButtonProps['onClick'];
    onMouseOver?: MuiButtonProps['onMouseOver'];
}

const Button = ({ id, className, variant, children, onClick, onMouseOver, disabled }: ButtonProps) => {
    return (
        <MuiButton
            id={id}
            aria-label="Button label"
            className={clsN(className, `${style.button}`)}
            variant={variant}
            onClick={onClick}
            onMouseOver={onMouseOver}
            disabled={disabled}
        >
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained', undefined]),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
};

Button.defaultProps = {
    id: undefined,
    className: `${style.button}`,
    variant: 'contained',
    onClick: undefined,
    onMouseOver: undefined,
};

export default Button;
