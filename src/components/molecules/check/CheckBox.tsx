import React from 'react';
import { FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import { CheckboxProps } from '@mui/material/Checkbox/Checkbox';
import CheckBox from '../../atoms/checkBox/CheckBox';

// FormControlLabel 로 감겨있음
// 정확히는 control 속성 안에
/*
* FormControl
* ㄴ FormLabel,
*    FormGroup
*    ㄴ FormControlLabel controll=> {checkBox, Label}
* */

interface MtWrapProps extends CheckboxProps{
    label: string,
    name: string,
}
const LabelControlWrapper = ({...props}:MtWrapProps ) => {

    return (
        <FormControlLabel control={<CheckBox name={props.name} />} label={props.label} />
    );
};
export default LabelControlWrapper;
LabelControlWrapper.prototype = {
    checked: PropTypes.bool.isRequired,
}