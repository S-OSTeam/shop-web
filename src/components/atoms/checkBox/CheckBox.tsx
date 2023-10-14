import React from 'react';
import { CheckboxProps } from '@mui/material';
import PropTypes from 'prop-types';

const CheckBoxComponent = ({...props}: CheckboxProps) => {

    return(
        <CheckBoxComponent
            checked={props.checked}
            onChange={props.onChange}
            name={props.name}
        />
    );
}

// 프로토타입 지정
CheckBoxComponent.prototype={
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.object,
}
// default
CheckBoxComponent.defaultProps={
    checked: false,
}
export default CheckBoxComponent;

