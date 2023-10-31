import React, { ReactNode } from 'react';
import { Icon } from '@mui/material';
import classNames from 'classnames';

interface StartInputProps {
    icon: ReactNode;
    size?: string;
}

const CustomIcon = ({ icon, size }: StartInputProps) => {
    return <Icon className={classNames(size)}>{icon}</Icon>;
};
CustomIcon.defaultProps = { size: undefined };

export default CustomIcon;
