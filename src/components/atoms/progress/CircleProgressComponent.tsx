import React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';
import PropTypes from 'prop-types';

interface AtomProps extends CircularProgressProps {
    className?: string;
    variant?: CircularProgressProps['variant'];
    color?: CircularProgressProps['color'];
}

const CircleProgressComponent = ({ className, variant, color }: AtomProps) => {
    return <CircularProgress className={className} variant={variant} color={color} />;
};

CircleProgressComponent.PropsType = {
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
