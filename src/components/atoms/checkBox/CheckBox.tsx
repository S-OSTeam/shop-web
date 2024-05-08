import React from 'react';
import { Checkbox as MuiCheckBox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { CheckBox as MuiIconCheckBox, CheckBoxOutlineBlank as MuiCheckBoxOutlineBlank } from '@mui/icons-material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/CheckBox.module.scss';

interface CheckboxProps extends MuiCheckboxProps {
    name: string;
    checkedIcon?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

const CheckBox = ({ name, checkedIcon, icon, className, defaultChecked }: CheckboxProps) => {
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    return (
        <MuiCheckBox
            className={clsN(className, `${style.checkBox}`)}
            name={name}
            checkedIcon={checkedIcon}
            icon={icon}
            defaultChecked={defaultChecked}
        />
    );
};

// 프롭 타입들 지정
CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    checkedIcon: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string,
};
// default
CheckBox.defaultProps = {
    checkedIcon: <MuiIconCheckBox />,
    icon: <MuiCheckBoxOutlineBlank />,
    className: `${style.checkBox}`,
};

export default CheckBox;
