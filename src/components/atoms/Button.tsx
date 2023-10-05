import React from 'react';
import ButtonMaterial from '@mui/material/Button';

interface ButtonProps {
    type: "button" | "submit" | "reset";
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
    return (
        <ButtonMaterial type={type} onClick={onClick}>
            {children}
        </ButtonMaterial>
    );
};

export default Button;