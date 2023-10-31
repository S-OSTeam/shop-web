import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';
import PropTypes from 'prop-types';

interface MyProps extends MenuItemProps{
    context?: string;
}
const Option = ({...props}: MyProps) => {
    return(
        <MenuItem
            value={props.value}
            key={props.key}
            aria-label={props['aria-label']}
        >
            {props.context}
        </MenuItem>
    )
}
Option.prototype={
    context: PropTypes.string,
};
Option.defaultProps={
    context: 'sample text',
};
export default Option;