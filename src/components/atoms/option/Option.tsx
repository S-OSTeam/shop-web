/* eslint-disable */
import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';
import PropTypes from 'prop-types';

/* eslint-disable-next-line */
interface optionInterface extends MenuItemProps{
}

const Option = ({...props}: optionInterface) => {
    return(
        <MenuItem
            {...props}
        />
    )
}
Option.propTypes={
};
Option.defaultProps={
};
export default Option;