import React from 'react';
import { Switch, SwitchProps } from '@mui/material';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const label = { inputProps: { 'aria-label': 'switch atom' } };

interface AtomProps extends SwitchProps {
    checked?: boolean;
    className?: string;
    size?: SwitchProps['size'];
    color?: SwitchProps['color'];
}

const SwitchComponent = ({ checked, className, size, color }: AtomProps) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Switch {...label} checked={checked} className={classNames(className)} size={size} color={color} />;
};

SwitchComponent.propsType = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning', 'default']),
};

SwitchComponent.defaultProps = {
    checked: true,
    className: ``,
    size: 'medium',
    color: 'default',
};

export default SwitchComponent;
