import React from 'react';
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Switcht.module.scss';

const label = { inputProps: { 'aria-label': 'switch atom' } };

interface SwitchProps extends MuiSwitchProps {
    checked?: boolean;
    className?: string;
    size?: MuiSwitchProps['size'];
    color?: MuiSwitchProps['color'];
}

const Switch = ({ checked, className, size, color }: SwitchProps) => {
    const [check, setChecked] = React.useState(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <MuiSwitch
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...label}
            checked={check}
            onChange={handleChange}
            className={clsN(className, `${style.switch}`)}
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
    className: `${style.switch}`,
    size: 'medium',
    color: 'default',
};

export default Switch;
