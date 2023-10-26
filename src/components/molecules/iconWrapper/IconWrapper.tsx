import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { MyIcon } from '../../atoms/icon/Icon';

interface IconProps{
    icon: string;
}
const IconWrapper = ({...props}:IconProps) => {
    const {icon} = props;
    return(
        <Box
            component='div'
        >
            <MyIcon>{icon}</MyIcon>
        </Box>
    );
};
IconWrapper.prototype={
    icon: PropTypes.string.isRequired,
}
export default IconWrapper;