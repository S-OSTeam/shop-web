import React from 'react';
import { Checkbox, CheckboxProps } from '@mui/material';

import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/CheckBox.module.scss';

interface myProps extends CheckboxProps {
    name: string;
    checkedIcon?: CheckboxProps['checkedIcon'];
    icon?: CheckboxProps['icon'];
    className?: string;
}
const CheckBoxComponent = ({ checkedIcon, icon, name, className }: myProps) => {
    return (
        <Checkbox name={name} checkedIcon={checkedIcon} icon={icon} className={clsN(className, `${styles.checkBox}`)} />
    );
};

// 프로토타입 지정
CheckBoxComponent.propTypes = {
    name: PropTypes.string.isRequired,
    checkedIcon: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string,
};
// default
CheckBoxComponent.defaultProps = {
    checkedIcon: undefined,
    icon: undefined,
    className: '',
};
export default CheckBoxComponent;
