import React from 'react';
import { Icon } from '@mui/material';
import classNames from 'classnames';

interface myIconProps {
    icon: React.ElementType;
    size?: 'inherit'
        | 'large'
        | 'medium'
        | 'small'
        | string;
}

const IconCustom = ({ icon, size }: myIconProps) => {
    return <Icon
        className={classNames(size)}
        component={icon}
    />;
};
IconCustom.defaultProps = { size: undefined };

export default IconCustom;
