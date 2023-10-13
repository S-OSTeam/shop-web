import React, { ReactNode, MouseEvent } from 'react';
import { IconButton } from '@mui/material';

interface PurchaseRelateButtonProps {
    icon?: ReactNode;
    content: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CustomIconButton = ({ icon, content, onClick }: PurchaseRelateButtonProps) => {
    return (
        <IconButton className="customIconButton" onClick={onClick}>
            {icon}
            {content}
        </IconButton>
    );
};

export default CustomIconButton;
