import React, { ReactNode } from 'react';
import { Icon } from '@mui/material';
import classNames from 'classnames';
import '../../../styles/scss/_icon.scss';

interface StartInputProps {
    icon?: ReactNode;
}

const StarInput = ({ icon }: StartInputProps) => {
    return <Icon className={classNames('starIcon')}>{icon}</Icon>;
};

export default StarInput;
