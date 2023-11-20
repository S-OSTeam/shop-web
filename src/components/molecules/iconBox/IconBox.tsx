import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Icon from '../../atoms/icon/IconCustom';

interface IconProps{
    icon: React.ElementType;
    className?: string;
    size?: 'inherit'
        | 'large'
        | 'medium'
        | 'small'
        | string;
}
const IconBox = ({...props}:IconProps) => {
    const {icon, className, size} = props;
    return(
        <Box
            component='div'
            className={className}
        >
            <Icon icon={icon} size={size}/>
        </Box>
    );
};
IconBox.prototype={
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
}
IconBox.defaultProps = {
    className: '',
    size: 'small',
}
export default IconBox;