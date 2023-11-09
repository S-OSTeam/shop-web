import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface myProps {
    variant?: "filled" | "outlined" | "standard" | undefined;
    label?: React.ReactNode;
    className?: string;
    name?: string | undefined;
    rows?: string | number | undefined;
    type?: React.HTMLInputTypeAttribute | undefined;
    autoFocus?: boolean | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    placeholder?: string | undefined;
    multiline?: boolean | undefined;
    value?: unknown;
    defaultValue?: unknown;
    fullWidth?: boolean | undefined;
    helperText?: React.ReactNode;
    required?: boolean | undefined;
    maxRows?: string | number;
    error?: boolean;
}
const InputComponent = ({ ...props }: myProps) => {

    return (
        <TextField
            variant={props.variant}
            label={props.label}
            className={classNames(props.className)}
            name={props.name}
            rows={props.rows}
            type={props.type}
            autoFocus={props.autoFocus}
            onChange={props.onChange}
            placeholder={props.placeholder}
            multiline={props.multiline}
            value={props.value}
            defaultValue={props.defaultValue}
            fullWidth={props.fullWidth}
            helperText={props.helperText}
            required={props.required}
            maxRows={props.maxRows}
            error={props.error}
        />
    );
};


InputComponent.prototype = {
    className: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    type: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    fullWidth: PropTypes.bool,
};
InputComponent.defaultProps = {
    rows: 1,
    autoFocus: false,
    multiline: false,
    variant: 'outlined',
    fullWidth: true,
};
export default InputComponent;