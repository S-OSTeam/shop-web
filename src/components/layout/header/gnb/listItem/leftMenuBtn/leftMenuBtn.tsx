import React from 'react';
import IconButton from '@molecules/button/iconButton/IconButton';
import clsN from 'classnames';
import styles from './styles/leftMenuBtn.module.scss';


interface leftMenuBtnProps {
    ariaLabel?: string;
    edge?: 'start' | 'end' | false;
    className?: string;
    icon: React.ReactNode;
    onClick?: ()=>void;
}
const LeftMenuBtn = (
    {
        ariaLabel,
        edge,
        className,
        icon,
        onClick
    }:leftMenuBtnProps) => {

    return(
        <IconButton
            aria-label={ariaLabel}
            edge={edge}
            className={clsN(className, `${styles.iconBtn}`)}
            icon={icon}
            onClick={onClick}
        />
    );

}
export default LeftMenuBtn;