import React from 'react';
import { Icon, IconProps } from '@mui/material';
import classNames from 'classnames';
import PropTypes from 'prop-types';

interface AtomProps extends IconProps {
    icon: React.ReactNode;
    className?: string;
    fontSize?: IconProps['fontSize'];
}

const IconComponent = ({ icon, className, fontSize }: AtomProps) => {
    return (
        <Icon className={classNames(className)} fontSize={fontSize}>
            {icon}
        </Icon>
    );
};

IconComponent.propsType = {
    icon: PropTypes.node.isRequired,
    className: PropTypes.string,
    fontSize: PropTypes.oneOf(['inherit', 'large', 'medium', 'small']),
};

IconComponent.defaultProps = {
    className: ``,
    fontSize: 'medium',
};

export default IconComponent;
