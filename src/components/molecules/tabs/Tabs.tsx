import React from 'react';
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Tabs.module.scss';


interface TabsProps extends MuiTabsProps {
    children: React.ReactNode;
    className?: string;
    onChange?: (e: React.SyntheticEvent, newValue: number) => void;
    ariaLabel?: string;
    value: number
}

const Tabs = (
    {
        children,
        className,
        onChange,
        ariaLabel,
        value
    }: TabsProps,
    ) => {

    // 핸들 이벤트 전달하기
    const handleChange = (e: React.SyntheticEvent, newValue: number) => {
        if(onChange){
            onChange(e,newValue);
        }
    }
    return (
        <MuiTabs value={value} className={clsN(className, `${styles.tabs}`)} onChange={handleChange} aria-label={ariaLabel}>
            {children}
        </MuiTabs>
    );
};
Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    ariaLabel: PropTypes.string,
    value: PropTypes.number.isRequired,
};
Tabs.defaultProps = {
    className: `${styles.tabs}`,
    onChange: undefined,
    ariaLabel: undefined,
};

export default Tabs;