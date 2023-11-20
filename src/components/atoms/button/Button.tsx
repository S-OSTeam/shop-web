import React, { MouseEvent } from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    id?: string;
    onMouseOver?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCustom = ({ children, onClick, className, id, onMouseOver }: ButtonProps) => {
    return (
        <Button
            id={id}
            className={classNames(className)}
            onClick={onClick}
            onMouseOver={onMouseOver}>
            {children}
        </Button>
    );
};
ButtonCustom.prototype = {
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    className: PropTypes.string,
    id: PropTypes.string,
};

ButtonCustom.defaultProps = {
    onClick: undefined,
    id: '',
    className: '',
    onMouseOver: ()=>{},
};
export default ButtonCustom;