import React from 'react';
import { FormGroup, FormGroupProps } from '@mui/material';

// checkbox 에게 데이터 전달
export const FormGroupCustom = ({...props}:FormGroupProps) => {
    return(
        <FormGroup>
            {props.children}
        </FormGroup>
    );
}