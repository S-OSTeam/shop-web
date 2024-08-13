import React from 'react';
import { HeadingPaper } from '@organisms/admin/paper/heading/HeadingPaper';
import { StackAdminLayout } from '@molecules/admin/layout/stack/StackAdminLayout';
import clsN from 'classnames';
import { Divider } from '@mui/material';
// import styles from './styles/Prodmgt.module.scss';

export const ProdmgtTemplate = () => {
    return (
        <StackAdminLayout stackProps={{ spacing: 1 }}>
            <HeadingPaper title="상품 조회" headingRootClsN={clsN()}>
                <Divider />
            </HeadingPaper>
        </StackAdminLayout>
    );
};
