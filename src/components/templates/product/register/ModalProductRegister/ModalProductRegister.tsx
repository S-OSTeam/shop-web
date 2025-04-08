/* eslint-disable */
import React from 'react';
import { Modal, Stack } from '@mui/material';
import { ProductInfo } from '@organisms/admin/product/register/productInfo/ProductInfo';
import { ProductCategoryRegister } from '@organisms/admin/product/register/productCategory/ProductCategory';
import clsN from 'classnames';
import styles from './styles/ModalProductRegister.module.scss';
import { ProductContent } from '@organisms/admin/product/register/productContent/ProductContent';
import { ProductPrice } from '@organisms/admin/product/register/productPrice/ProductPrice';
import { ProductImage } from '@organisms/admin/product/register/productImage/ProductImage';

interface ModalProductRegisterProps {
    isOpen: boolean;
}

export const ModalProductRegister = ({ isOpen }: ModalProductRegisterProps) => {
    return (
        <Modal open={isOpen} className={clsN(styles['modal'])}>
            <Stack className={clsN(styles['modal-box'])} gap={2}>
                <ProductInfo
                    className={clsN(styles['modal-box__content'])}
                    parentHeadlineCleN={styles['component-headline']}
                    sectionHeadlineClsN={styles['section-headline']}
                />
                <ProductCategoryRegister
                    className={clsN(styles['modal-box__content'])}
                    parentHeadlineCleN={styles['component-headline']}
                    sectionHeadlineClsN={styles['section-headline']}
                />
                <ProductContent
                    className={clsN(styles['modal-box__content'])}
                    parentHeadlineCleN={styles['component-headline']}
                    sectionHeadlineClsN={styles['section-headline']}
                />
                <ProductPrice
                    className={clsN(styles['modal-box__content'])}
                    parentHeadlineCleN={styles['component-headline']}
                    sectionHeadlineClsN={styles['section-headline']}
                />
                <ProductImage
                    className={clsN(styles['modal-box__content'])}
                    parentHeadlineCleN={styles['component-headline']}
                    sectionHeadlineClsN={styles['section-headline']}
                />
            </Stack>
        </Modal>
    );
};
