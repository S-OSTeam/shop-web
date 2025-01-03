/* eslint-disable */
import React from 'react';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { Stack } from '@mui/material';
import { ProductRegisterButtonGroup } from '@molecules/admin/product/register/ProductRegisterButtonGroup';
import clsN from 'classnames';
import styles from './styles/ProductRegisterTemplate.module.scss';

interface ProductManagementProps {
    className?: string;
}

export const ProductRegisterTemplate = ({ className }: ProductManagementProps) => {
    const Headline = (
        <Heading
            heading="상품 등록"
            subtitle1="항목을 선택해 주세요"
            className={clsN(styles.template__headline)}
            headingClsN={clsN(styles.template__headline__heading)}
            subtitle1ClsN={clsN(styles.template__headline__subtitle)}
        />
    );

    return (
        <Stack className={clsN()} direction="column" spacing={1}>
            {Headline}
            <ProductRegisterButtonGroup />
        </Stack>
    );
};
