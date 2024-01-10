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
    const [check, setChecked] = React.useState(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <Switch
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...label}
            checked={check}
            onChange={handleChange}
            className={classNames(className)}
            size={size}
            color={color}
        />
    );
};

// 프로토타입 지정 prototype, PropType
SwitchComponent.propsType = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning', 'default']),
};

// Props 초기 셋팅
SwitchComponent.defaultProps = {
    checked: true,
    className: ``,
    size: 'medium',
    color: 'default',
};

export default SwitchComponent;
