import React from 'react';
import {Box, TextField} from '@mui/material';


interface myDefaultInputProps {
    id?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    ph?: string;
    label?: string;
    className?: string;
    value?: string;
    onChange?: ()=>void;
}


export const InputElement = ({...props}: myDefaultInputProps) => {
    return(
        <Box
            sx={{
                padding: '20px',
            }}>
            <TextField
                required
                id={props.id}
                variant={props.variant}
                placeholder={props.ph}
                className={props.className}
                value={props.value}
                onChange={props.onChange}
            />
        </Box>
    )
}