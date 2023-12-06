import React from 'react';
import { Checkbox, CheckboxProps } from '@mui/material';

import PropTypes from 'prop-types';
import clsN from 'classnames';
import { CheckBox, CheckBoxOutlineBlank, } from '@mui/icons-material';
import styles from './styles/CheckBox.module.scss';

interface myProps extends CheckboxProps {
    name: string;
    checkedIcon?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}
const CheckBoxComponent = ({ checkedIcon, icon, name, className, defaultChecked }: myProps) => {
    return (
        <Checkbox
            name={name}
            checkedIcon={checkedIcon}
            icon={icon}
            className={clsN(className, `${styles.checkBox}`)}
            defaultChecked={defaultChecked}
        />
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
    checkedIcon: <CheckBox/>,
    icon: <CheckBoxOutlineBlank/>,
    className: '',
};
export default CheckBoxComponent;
