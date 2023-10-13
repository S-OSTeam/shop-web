import React from 'react';
import { Box } from '@mui/material';
import DetailDepth from '../../components/molecules/product/DetailDepth';
import PurchaseRelateButton from '../../components/molecules/product/PurchaseRelateButton';
import ImageBanner from '../../components/organisms/product/ImageBanner';
import SubInfo from '../../components/templates/product/SubInfo';

const ProductInfo = () => {
    const Testaddress = [
        { id: 1, address: '뎁스1' },
        { id: 2, address: '뎁스2' },
        { id: 3, address: '뎁스3' },
    ];
    return (
        <div>
            <Box className="detailDepth">
                <DetailDepth address={Testaddress} />
            </Box>
            <Box className="info">
                <div className="productImage">
                    <ImageBanner />
                </div>
                <div className="productSubInfo">
                    <SubInfo />
                </div>
                <div className="purchaseRelate">
                    <PurchaseRelateButton />
                </div>
            </Box>
        </div>
    );
};
export interface addressData {
    id: number;
    address: string;
}
export default ProductInfo;
