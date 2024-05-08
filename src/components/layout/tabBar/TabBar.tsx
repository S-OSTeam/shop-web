/* eslint-disable */
import React from 'react';
import Tabs from '@molecules/tabs/Tabs';
import clsN from 'classnames';
import styles from './styles/TabBar.module.scss';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

interface TabBarProps {
    className?: string;
    tabsClsN?: string;
    ariaLabels?: string;
    onChange?: (e: React.SyntheticEvent, value: any) => void;
    value: number
    children: React.ReactNode;
}

const TabBar = (
    {
        className,
        tabsClsN,
        onChange,
        value,
        children
    }:TabBarProps
) => {
    /** 클래스명 상태 관리 콜백으로 */


    return(
        <Box component='nav' className={clsN(className, `${styles.box}`)}>
            <Tabs value={value} onChange={onChange} className={clsN(tabsClsN, styles['box__tabs'])}>
                {children}
            </Tabs>
        </Box>
    );
}
TabBar.propTypes = {
    className: PropTypes.string,
    tabsClsN: PropTypes.string,
    ariaLabels: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
}
TabBar.defaultProps = {
    className: clsN(`${styles['box']}`),
    tabsClsN: clsN(`${styles['box__tabs']}`),
    onChange: undefined,
}
export default TabBar