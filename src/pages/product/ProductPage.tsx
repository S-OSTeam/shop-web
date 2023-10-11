import React from 'react';
import { Box } from '@mui/material';
import '../../styles/scss/_product.scss';
import ProductTab from '../../components/molecules/product/ProductTab';
import ProductInfo from './ProductInfo';
// import TestProduct from '../../interface/TestProduct';

const ProductPage = () => {
    // const testData: TestProduct = {
    //     imgs: ['', ''],
    //     productId: '',
    //     pName: '테스트 피규어1',
    //     manufacture: '테스트 피규어 제조사1',
    //     pOrigin: '테스트 피규어 원산지 1',
    //     texture: '테스트 피규어 재질',
    //     pSize: 123,
    //     pWeight: 1.23,
    //     price: 39100,
    // };

    return (
        <Box className="productMain">
            <Box className="productInfo">
                <ProductInfo />
            </Box>
            <Box className="tabContent">
                <ProductTab tabId={1} />
            </Box>
            <Box className="productDetail">
                <div />
            </Box>
            <Box className="tabContent">
                <ProductTab tabId={2} />
            </Box>
            <Box className="productReview">
                <div />
            </Box>
            <Box className="tabContent">
                <ProductTab tabId={3} />
            </Box>
            <Box className="productFAQ">
                <div />
            </Box>
            <Box className="tabContent">
                <ProductTab tabId={4} />
            </Box>
            <Box className="productDelivery">
                <div />
            </Box>
        </Box>
    );
};

export default ProductPage;
