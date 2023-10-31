import React from 'react';
import { Checkbox ,CheckboxProps } from '@mui/material';
import PropTypes from 'prop-types';


// 체크박스의 체크 영역
const CheckBoxComponent = ({...props}: CheckboxProps) => {
    return(
        <Checkbox

            name={props.name}
        />
    );
}

// 프로토타입 지정
CheckBoxComponent.prototype={
    name: PropTypes.string,
    defaultChecked: PropTypes.bool,
}
// default
CheckBoxComponent.defaultProps={
    defaultChecked: false,
}
export default CheckBoxComponent;

