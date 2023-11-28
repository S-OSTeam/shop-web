import React from 'react';
import { Icon, IconProps } from '@mui/material';
import classNames from 'classnames';
import clsN from 'classnames';
import styles from './styles/IconCustom.module.scss';
import PropTypes from 'prop-types';

export interface myIconProps extends IconProps {
    children: React.ReactNode;
    fontSize?: IconProps['fontSize'];
    className?: string;
}

const IconCustom = ({ children, fontSize, className }: myIconProps) => {
    return (
        <Icon className={classNames(clsN(className, `${styles.icon}`))} fontSize={fontSize}>
            {children}
        </Icon>
    );
};
IconCustom.prototype = {
    children: PropTypes.node.isRequired,
    fontSize: PropTypes.oneOf(['inherit', 'large', 'medium', 'small']),
    className: PropTypes.string,
};
IconCustom.defaultProps = {
    fontSize: 'inherit',
    className: undefined,
};

export default IconCustom;
