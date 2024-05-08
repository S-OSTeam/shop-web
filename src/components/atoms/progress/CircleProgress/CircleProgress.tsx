import React from 'react';
import {
    CircularProgress as MuiCircularProgress,
    CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Progress.module.scss';

interface CircularProgressProps extends MuiCircularProgressProps {
    className?: string;
    variant?: MuiCircularProgressProps['variant'];
    color?: MuiCircularProgressProps['color'];
}

const CircleProgress = ({ className, variant, color }: CircularProgressProps) => {
    return <MuiCircularProgress className={clsN(className, `${style.progress}`)} variant={variant} color={color} />;
};

CircleProgress.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['indeterminate', 'determinate']),
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

CircleProgress.defaultProps = {
    className: `${style.progress}`,
    variant: 'indeterminate',
    color: 'primary',
};

export default CircleProgress;
