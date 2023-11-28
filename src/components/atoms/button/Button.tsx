import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Button.module.scss';

interface ButtonCustomProps extends MuiButtonProps {
    children: React.ReactNode;
    onClick?: MuiButtonProps['onClick'];
    onMouseOver?: MuiButtonProps['onMouseOver'];
    className?: string;
    id?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const ButtonCustom = ({ children, disabled, ...props }: ButtonCustomProps) => {
    return (
        <MuiButton
            onClick={props.onClick}
            onMouseOver={props.onMouseOver}
            id={props.id}
            className={clsN(props.className, `${styles.button}`)}
            type={props.type}
            disabled={disabled}
        >
            {children}
        </MuiButton>
    );
};
ButtonCustom.prototype = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    className: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset', undefined]),
};

ButtonCustom.defaultProps = {
    onClick: undefined,
    id: '',
    className: undefined,
    onMouseOver: () => {},
    type: 'button',
};
export default ButtonCustom;
