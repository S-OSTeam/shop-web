import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';
import PropTypes from 'prop-types';

interface AtomProps extends MenuItemProps {
    context?: string;
}

const OptionComponent = ({ ...props }: AtomProps) => {
    return (
        <MenuItem value={props.value} key={props.key} aria-label={props['aria-label']}>
            {props.context}
        </MenuItem>
    );
};
OptionComponent.prototype = {
    context: PropTypes.string,
};
OptionComponent.defaultProps = {
    context: 'sample text',
};

export default OptionComponent;
