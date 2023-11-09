/* eslint-disable */
import React from 'react';
import { InputBaseComponentProps, TextField, TextFieldProps } from '@mui/material';

interface NatiSelectorInterface {
    variant?: "filled" | "outlined" | "standard" | undefined;
    value?: unknown;
    label?: React.ReactNode;
    onChange?: ()=> void;
    inputProps?: InputBaseComponentProps | undefined;
    select?: boolean | undefined;
}

// NativeSelect 모바일 최적화에 좋다고함
export const NatiSelector = (
    {
        ...props
    }:TextFieldProps) => {

    return (
        <TextField
            variant={props.variant}
            value={props.value}
            label={props.label}
            onChange={props.onChange}
            inputProps={props.inputProps}
            select
        >
            {props.children}
        </TextField>
    );
};