/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductTemplate from '@templates/product/ProductTemplate';

const ProductPage = () => {
    const location = useLocation();

    const { productItem } = location.state || {};

    return <ProductTemplate item={productItem} />;
};

export default ProductPage;
