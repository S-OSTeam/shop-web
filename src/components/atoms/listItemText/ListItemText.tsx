import React from 'react';
import { ListItemText as MuiItemText, ListItemTextProps as MuiItemTextProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/ListItemText.module.scss';

interface ListItemTextProps extends MuiItemTextProps {
    className?: string;
    primary: React.ReactNode;
}

const ListItemText = (
    {
        className,
        primary
    }:ListItemTextProps
) => {
    return(
        <MuiItemText
            className={clsN(className,styles.listText)} primary={primary} />

    );
}
ListItemText.propTypes = {
    className: PropTypes.string,
    primary: PropTypes.node.isRequired,
}
ListItemText.defaultProps = {
    className: styles.listText
}
export default ListItemText;