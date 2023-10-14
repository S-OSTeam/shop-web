import React from 'react';
import { FormControlLabel, FormControlLabelProps } from '@mui/material';

export const ContentFormControlLabel = ({...props}:FormControlLabelProps) => {
    return(
      <FormControlLabel
          control={
            props.control
          }
          label={props.label}
      />

    );
}