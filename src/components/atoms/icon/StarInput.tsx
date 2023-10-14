import React, { ReactNode } from 'react';
import { Icon } from '@mui/material';
import classNames from 'classnames';

interface StartInputProps {
    icon: ReactNode;
    size?: string;
}

const StarInput = ({ icon, size }: StartInputProps) => {
    return <Icon className={classNames(size)}>{icon}</Icon>;
};
StarInput.defaultProps = { size: undefined };

export default StarInput;
