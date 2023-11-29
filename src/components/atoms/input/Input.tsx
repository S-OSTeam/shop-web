import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Input.module.scss';

interface InputProps {
    name?: string | undefined;
    className?: string;
    label?: React.ReactNode;
    type?: React.HTMLInputTypeAttribute | undefined;
    variant?: "filled" | "outlined" | "standard" | undefined;
    rows?: string | number | undefined;
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
const Input = (
    {
        variant,
        error,
        maxRows,
        rows,
        required,
        type,
        placeholder,
        value,
        defaultValue,
        autoFocus,
        className,
        name,
        fullWidth,
        onChange,
        multiline,
        helperText,
        label
    }: InputProps) => {
    return (
        <TextField
            name={name}
            className={clsN(className, `${styles.input}`)}
            label={label}
            type={type}
            variant={variant}
            rows={rows}
            autoFocus={autoFocus}
            onChange={onChange}
            placeholder={placeholder}
            multiline={multiline}
            value={value}
            defaultValue={defaultValue}
            fullWidth={fullWidth}
            helperText={helperText}
            required={required}
            maxRows={maxRows}
            error={error}
        />
    );
};


Input.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.node,
    type: PropTypes.string,
    variant: PropTypes.oneOf(["filled", "outlined", "standard", undefined]),
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.oneOf([PropTypes.string, undefined]),
    multiline: PropTypes.bool,
    value: PropTypes.oneOf([PropTypes.string, undefined]),
    defaultValue: PropTypes.any,
    fullWidth: PropTypes.oneOf([PropTypes.bool, undefined]),
    helperText: PropTypes.node,
    required: PropTypes.oneOf([PropTypes.bool, undefined]),
    maxRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number,]),
    error: PropTypes.oneOf([PropTypes.bool, undefined]),
};
Input.defaultProps = {
    name: undefined,
    className: `${styles.input}`,
    label: undefined,
    type: 'text',
    variant: 'outlined',
    rows: 1,
    autoFocus: false,
    onChange: ()=>{},
    placeholder: undefined,
    multiline: false,
    value: undefined,
    defaultValue: undefined,
    fullWidth: true,
    helperText: undefined,
    required: undefined,
    maxRows: null,
    error: undefined,
};
export default Input;