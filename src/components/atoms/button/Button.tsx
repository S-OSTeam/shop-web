/* ts-ignore */
import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Button.module.scss';

interface AtomBtnProps extends MuiButtonProps {
    id?: string;
    className?: string;
    variant?: MuiButtonProps['variant'];
    children: React.ReactNode;
    onClick?: MuiButtonProps['onClick'];
    onMouseOver?: MuiButtonProps['onMouseOver'];
}

const Button = (
    {
        id,
        className,
        variant,
        children,
        disabled,
        onClick,
        onMouseOver,
    }: AtomBtnProps) => {
    return (
        <MuiButton
            onClick={onClick}
            onMouseOver={onMouseOver}
            id={id}
            className={clsN(className, `${styles.button}`)}
            disabled={disabled}
            variant={variant}

        >
            {children}
        </MuiButton>
    );
};
Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf([ "text" , "outlined" , "contained", undefined]),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
};

Button.defaultProps = {
    id: '',
    className: `${styles.button}`,
    variant: 'contained',
    onClick: ()=>{},
    onMouseOver: ()=>{},

};
export default Button;