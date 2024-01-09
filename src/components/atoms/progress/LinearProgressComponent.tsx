import React, { useEffect, useState } from 'react';
import { LinearProgress, LinearProgressProps } from '@mui/material';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface AtomProps extends LinearProgressProps {
    className?: string;
    variant?: LinearProgressProps['variant'];
    color?: LinearProgressProps['color'];
}

const LinearProgressComponent = ({ className, variant, color }: AtomProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <LinearProgress className={classNames(className)} variant={variant} value={progress} color={color} />;
};

LinearProgressComponent.propsType = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['indeterminate', 'determinate', 'query', 'buffer']),
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

LinearProgressComponent.defaultProps = {
    className: '',
    variant: 'determinate',
    color: 'primary',
};

export default LinearProgressComponent;
