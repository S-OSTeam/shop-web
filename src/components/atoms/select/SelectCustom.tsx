import React from 'react';
import { TextField ,TextFieldProps } from '@mui/material';
import PropTypes from 'prop-types';

const SelectCustom = ({ ...props }: TextFieldProps) => {
    return (
        <TextField
            variant={props.variant}
            value={props.value}
            label={props.label}
            onChange={props.onChange}
            inputProps={props.inputProps}
            className={props.className}
            select
        >
            {props.children}
        </TextField>
    );
};
SelectCustom.prototype = {
    variant: PropTypes.oneOf([ 'filled', 'outlined', 'standard', undefined]),
    name: PropTypes.string,
    labelId: PropTypes.string,
    label: PropTypes.node,
};
SelectCustom.defaultProps = {
    variant: 'outlined',
    id: undefined,
    name: undefined,
    label: undefined,
};
export default SelectCustom;