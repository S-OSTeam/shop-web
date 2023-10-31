import React, { ReactNode } from 'react';
import { Icon } from '@mui/material';
import classNames from 'classnames';

interface CustomIconProps {
    icon: ReactNode;
    size?: string;
}

const CustomIcon = ({ icon, size }: CustomIconProps) => {
    return <Icon className={classNames(size)}>{icon}</Icon>;
};
CustomIcon.defaultProps = { size: undefined };

export default CustomIcon;
