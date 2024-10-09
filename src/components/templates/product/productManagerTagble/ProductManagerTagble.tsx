import React from 'react';
import { StackAdminLayout } from '@molecules/admin/layout/stack/StackAdminLayout';
import clsN from 'classnames';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { ProdTable } from '@organisms/admin/page/prodmgt/prodTable/ProdTable';

// import styles from './styles/ProductManagerTagble.module.scss';

export const ProductManagerTagble = () => {
    return (
        <StackAdminLayout stackProps={{ spacing: 1 }}>
            <Heading
                heading="상품 조회"
                headingClsN={clsN()}
                subtitle1="등록한 상품을 조회 및 관리하세요"
                subtitle1ClsN={clsN()}
            />
            <ProdTable />
        </StackAdminLayout>
    );
};
