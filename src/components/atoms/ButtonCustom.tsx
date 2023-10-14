import React from 'react';
import { Button } from '@mui/material';

interface ButtonCustomProps {
    id: number;
    width: string;
    height: string;
    text: string;
    fontSize: string;
    onClick?: () => void;
    pl?: number;
    pr?: number;
    active?: boolean;
}

const ButtonCustom = ({ id, text, width, height, fontSize, onClick, pr, pl, active }: ButtonCustomProps) => {
    const buttonStyle = {
        width,
        height,
        color: active ? 'white' : '#80A1D4',
        fontSize,
        borderColor: 'secondary.main',
        backgroundColor: active ? '#80A1D4' : '#FFFFFF',
        pl,
        pr,
        borderRadius: '5px',
    };
    return (
        <Button
            variant="outlined"
            id={`${id}`}
            sx={{ ...buttonStyle, '&': { ml: 1 }, '&:hover': { color: 'blue' } }}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};
ButtonCustom.defaultProps = {
    onClick: undefined,
    pl: 3.194,
    pr: 3.194,
    active: false,
};
export default ButtonCustom;
