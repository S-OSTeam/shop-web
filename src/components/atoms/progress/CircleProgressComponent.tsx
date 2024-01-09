import React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface AtomProps extends CircularProgressProps {
    className?: string;
    variant?: CircularProgressProps['variant'];
    color?: CircularProgressProps['color'];
}

const CircleProgressComponent = ({ className, variant, color }: AtomProps) => {
    return <CircularProgress className={classNames(className)} variant={variant} color={color} />;
};

CircleProgressComponent.propsType = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['indeterminate', 'determinate']),
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

CircleProgressComponent.defaultProps = {
    className: '',
    variant: 'indeterminate',
    color: 'primary',
};

export default CircleProgressComponent;
