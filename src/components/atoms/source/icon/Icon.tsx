import React from 'react';
import { Icon as MuiIcon, IconProps as MuiIconProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Icon.module.scss';

interface IconProps extends MuiIconProps {
    icon: React.ReactNode;
    className?: string;
    fontSize?: MuiIconProps['fontSize'];
}

const Icon = ({ icon, className, fontSize }: IconProps) => {
    return (
        <MuiIcon className={clsN(className, `${style.icon}`)} fontSize={fontSize}>
            {icon}
        </MuiIcon>
    );
};

Icon.propTypes = {
    icon: PropTypes.node.isRequired,
    className: PropTypes.string,
    fontSize: PropTypes.oneOf(['inherit', 'large', 'medium', 'small', undefined]),
};

Icon.defaultProps = {
    className: `${style.icon}`,
    fontSize: 'medium',
};

export default Icon;
