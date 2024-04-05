/* eslint-disable */
import React from 'react';
import { Box, Typography } from '@mui/material';
import clsN from 'classnames';
import styles from './style/TabPanel.module.scss';

interface TabPanelProps {
    children?: React.ReactNode;
    className?: string;
    value: number;
    index: number;
}

const TabPanel = (
    {
        ...props
    }:TabPanelProps
) => {
    const {children, value, index, className, ...other} = props;

    return(
        <div
            className={clsN(className, styles['panel'])}
            role='tabpanel'
            hidden = { value !== index }
            id={`simple-tabpanel-${index}`}
            aria-label={`simple-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
};
export default TabPanel;