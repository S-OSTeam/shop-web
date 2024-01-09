import React from 'react';
import { Checkbox, CheckboxProps } from '@mui/material';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import PropTypes from 'prop-types';

interface AtomProps extends CheckboxProps {
    name: string;
    checkedIcon?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

const CheckBoxComponet = ({ name, checkedIcon, icon, className, defaultChecked }: AtomProps) => {
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    return (
        <Checkbox
            className={className}
            name={name}
            checkedIcon={checkedIcon}
            icon={icon}
            defaultChecked={defaultChecked}
        />
    );
};

// 프로토타입 지정
CheckBoxComponet.propTypes = {
    name: PropTypes.string.isRequired,
    checkedIcon: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string,
};
// default
CheckBoxComponet.defaultProps = {
    checkedIcon: <CheckBox />,
    icon: <CheckBoxOutlineBlank />,
    className: '',
};

export default CheckBoxComponet;
