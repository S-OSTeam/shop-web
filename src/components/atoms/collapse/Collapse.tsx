import React from 'react';
import { Collapse as MuiCollapse, CollapseProps as MuiCollapseProps } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/Collapse.module.scss';

interface CollapseProps extends MuiCollapseProps {
    // root 클래스명
    className?: string;
    // 내부 컨텐츠
    children: React.ReactNode;
    // 열람 여부
    in?: boolean;
}

export const Collapse = ({ ...props }: CollapseProps) => {
    return (
        <MuiCollapse className={clsN(props.className, styles.collapse)} in={props.in}>
            {props.children}
        </MuiCollapse>
    );
};
Collapse.defaultProps = {
    className: styles.collapse,
    in: undefined,
};
