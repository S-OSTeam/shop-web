import React, { ReactNode, MouseEvent } from 'react';
import { IconButton } from '@mui/material';
import classNames from 'classnames';

interface CustomIconButtonProps {
    icon?: ReactNode;
    content?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onMouseOver?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const CustomIconButton = ({ icon, content, onClick, onMouseOver, className }: CustomIconButtonProps) => {
    return (
        <IconButton className={classNames(className)} onClick={onClick} onMouseOver={onMouseOver}>
            {icon}
            {content}
        </IconButton>
    );
};
CustomIconButton.defaultProps = {
    icon: undefined,
    className: undefined,
    content: undefined,
    onClick: undefined,
    onMouseOver: undefined,
};

export default CustomIconButton;
