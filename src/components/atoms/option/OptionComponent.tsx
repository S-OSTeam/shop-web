import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface AtomProps extends MenuItemProps {
    content: string;
    className?: string;
    value: string;
    key: string;
}

const OptionComponent = ({ key, content, className, value }: AtomProps) => {
    return (
        <MenuItem key={key} className={classNames(className)} value={value}>
            {content}
        </MenuItem>
    );
};

OptionComponent.propsType = {
    content: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    key: PropTypes.string,
};

OptionComponent.defaultProps = {
    className: ``,
};

export default OptionComponent;
