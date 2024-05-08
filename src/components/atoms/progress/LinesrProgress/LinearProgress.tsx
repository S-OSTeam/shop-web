import React, { useEffect, useState } from 'react';
import { LinearProgress as MuiLinearProgress, LinearProgressProps as MuiLinearProgressProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Progress.module.scss';

interface LinearProgressProps extends MuiLinearProgressProps {
    className?: string;
    variant?: MuiLinearProgressProps['variant'];
    color?: MuiLinearProgressProps['color'];
}

const LinearProgress = ({ className, variant, color }: LinearProgressProps) => {
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

    return (
        <MuiLinearProgress
            className={clsN(className, `${style.progress}`)}
            variant={variant}
            value={progress}
            color={color}
        />
    );
};

LinearProgress.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['indeterminate', 'determinate', 'query', 'buffer']),
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit', undefined]),
};

LinearProgress.defaultProps = {
    className: `${style.progress}`,
    variant: 'determinate',
    color: 'primary',
};

export default LinearProgress;
