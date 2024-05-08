import React from 'react';
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';
import clsN from 'classnames';
import PropTypes from 'prop-types';

interface SwitchProps extends MuiSwitchProps {
    checked?: boolean;
    className?: string;
    size?: MuiSwitchProps['size'];
    color?: MuiSwitchProps['color'];
}

const Switch = ({ checked, className, size, color }: SwitchProps) => {
    const [check, setChecked] = React.useState(checked);
    const label = { inputProps: { 'aria-label': 'switch atom' } };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <MuiSwitch
            {...label}
            checked={check}
            onChange={handleChange}
            className={clsN(className)}
            size={size}
            color={color}
        />
    );
};

// 프로토타입 지정 prototype, PropType
Switch.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning', 'default']),
};

// Props 초기 셋팅
Switch.defaultProps = {
    checked: true,
    className: ``,
    size: 'medium',
    color: 'default',
};

export default Switch;