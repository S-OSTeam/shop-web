import React, { MouseEvent } from 'react';
import { Button } from '@mui/material';
import classNames from 'classnames';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    onMouseOver?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCustom = ({ children, onClick, className, onMouseOver }: ButtonProps) => {
    return (
        <Button className={classNames(className)} onClick={onClick} onMouseOver={onMouseOver}>
            {children}
        </Button>
    );
};

ButtonCustom.defaultProps = {
    onClick: undefined,
    onMouseOver: undefined,
    className: undefined,
};
export default ButtonCustom;
