import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Option.module.scss';

interface AtomProps extends MenuItemProps {
    children: React.ReactNode;
    className?: string;
    'aria-label'?: React.AriaAttributes['aria-label'];
}

const Option = ({ ...props }: AtomProps) => {
    return (
        <MenuItem
            className={clsN(props.className, `${style.option}`)}
            value={props.value}
            key={props.key}
            aria-label={props['aria-label']}
        >
            {props.children}
        </MenuItem>
    );
};
Option.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    'aria-label': PropTypes.string,
};
Option.defaultProps = {
    className: `${style.option}`,
    'aria-label': undefined,
};

export default Option;
