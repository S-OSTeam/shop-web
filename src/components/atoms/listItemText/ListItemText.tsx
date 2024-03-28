import React from 'react';
import { ListItemText as MuiItemText, ListItemTextProps as MuiItemTextProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/ListItemText.module.scss';

interface ListItemTextProps extends MuiItemTextProps {
    className?: string;
    primaryClsN?: string;
    primary: React.ReactNode;
}

const ListItemText = (
    {
        className,
        primary,
        primaryClsN
    }:ListItemTextProps
) => {
    return(
        <MuiItemText
            classes={{
                root: clsN(className,styles.list)
            }}
            className={clsN(className,styles.list__container)} primary={primary}
            primaryTypographyProps={{
                classes: {
                    root: clsN(primaryClsN,styles.list__primary)
                }
            }}
        />

    );
}
ListItemText.propTypes = {
    className: PropTypes.string,
    primary: PropTypes.node.isRequired,
    primaryClsN: PropTypes.string,
}
ListItemText.defaultProps = {
    className: styles.listText,
    primaryClsN: styles.listText__primary,
}
export default ListItemText;