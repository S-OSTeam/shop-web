import React from 'react';
import { Stack, StackProps } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/StackAdminLayout.module.scss';

interface StackAdminLayoutProps {
    children: React.ReactNode;
    // 유틸리티 타입 패턴을 활용하여 불필요한 인터페이스 재선언 방지
    stackProps?: Partial<StackProps>;
}

export const StackAdminLayout = ({ ...props }: StackAdminLayoutProps) => {
    return (
        <Stack className={clsN(styles.main, props.stackProps?.className)} {...(props.stackProps || {})}>
            {props.children}
        </Stack>
    );
};
