import React from 'react';
import { Box, Stack } from '@mui/material';
import DetailDepth from '../../components/molecules/product/DetailDepth';
import ImageBanner from '../../components/organisms/product/ImageBanner';
import SubInfo from '../../components/templates/product/SubInfo';

const ProductInfo = () => {
    // 상품 정보
    const Testaddress = [
        // 테스트 뎁스 주소
        { id: 1, address: '뎁스1' },
        { id: 2, address: '뎁스2' },
        { id: 3, address: '뎁스3' },
    ];
    return (
        <div>
            <Box className="detailDepth">
                <DetailDepth address={Testaddress} />
            </Box>
            <Stack className="info" direction="row">
                <div className="productImage">
                    <ImageBanner />
                </div>
                <div className="productSubInfo">
                    <SubInfo />
                </div>
            </Stack>
        </div>
    );
};
export interface testAddressData {
    id: number;
    address: string;
}
export default ProductInfo;
