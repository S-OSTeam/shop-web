import React, { MouseEvent, ReactNode } from 'react';
import { IconButton } from '@mui/material';

interface IconBtnProps {
    icon: ReactNode;
    onclick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const IconBtn = ({ icon, onclick }: IconBtnProps) => {
    return (
        <IconButton className="iconBtn" onClick={onclick}>
            {icon}
        </IconButton>
    );
};

export default IconBtn;
