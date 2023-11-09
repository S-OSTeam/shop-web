import React from 'react';
import { FormControlLabel, FormControlLabelProps } from '@mui/material';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface FormCtrlInterface {
    control: FormControlLabelProps['control'];
    label: React.ReactNode;
    className?: string | '';
}
const FormControlCheckBox = ({...props}:FormCtrlInterface) => {

    return(
        <FormControlLabel className={classNames(props.className)} control={props.control} label={props.label} />
    );
}
FormControlCheckBox.prototype = {
    control: PropTypes.element.isRequired,
    label: PropTypes.node.isRequired,
    className: PropTypes.string,
}
FormControlCheckBox.defaultProps = {
    className: '',
}
export default FormControlCheckBox;