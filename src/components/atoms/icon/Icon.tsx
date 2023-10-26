
import React from 'react';
import { Icon, IconProps } from '@mui/material';

export const MyIcon = (props: IconProps) => {
    return(<Icon {...props}/>);
}
MyIcon.muiName = 'Icon';