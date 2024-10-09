import React from 'react';
import AdminTemplate from '@templates/admin/Admin';
import { ProductManagerTagble } from '@templates/product/productManagerTagble/ProductManagerTagble';

export const Management = () => {
    return (
        <AdminTemplate>
            <ProductManagerTagble />
        </AdminTemplate>
    );
};
