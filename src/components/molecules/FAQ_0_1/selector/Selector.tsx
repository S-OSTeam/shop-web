import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';


/*
import Option from '../../../atoms/option/Option';
interface myProps extends SelectProps{}
*/

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