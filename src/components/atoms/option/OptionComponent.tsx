import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';
import PropTypes from 'prop-types';

interface AtomProps extends MenuItemProps {
    content: string;
    className?: string;
    value: string;
    key: string;
}

const OptionComponent = ({ key, content, className, value }: AtomProps) => {
    return (
        <MenuItem key={key} className={className} value={value}>
            {content}
        </MenuItem>
    );
};

OptionComponent.PropsType = {
    content: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    key: PropTypes.string,
};

OptionComponent.defaultProps = {
    className: ``,
};

export default OptionComponent;
