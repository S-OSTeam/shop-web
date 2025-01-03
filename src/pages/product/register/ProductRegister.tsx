/* eslint-disable */
import React from 'react';
import AdminTemplate from '@templates/admin/Admin';
import { ProductRegisterTemplate } from '@templates/product/register/ProductRegister/ProductRegisterTemplate';
import clsN from 'classnames';

// interface CreateProductProps{
//
// }

export const ProductRegister = () => {
    return (
        <AdminTemplate>
            <ProductRegisterTemplate />
        </AdminTemplate>
    );
};
