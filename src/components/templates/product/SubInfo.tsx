import React from 'react';
import { Box } from '@mui/material';
import Tags from '../../molecules/product/Tags';
import Summery from '../../organisms/product/Summery';
import '../../../styles/scss/_summery.scss';

const SubInfo = () => {
    const TestTags = ['20267', '레진', '피규어', '캐릭터'];
    const TestProduct = {
        pCode: 13515124,
        pName: '테스트피규어1',
        pPrice: 31930,
        pDay: 4,
        pOrigin: '어벤져스:엔드게임',
        pMaterial: '고무',
        pSize: 123,
        pWeight: 1.23,
        pReview: 378,
        pPurchase: 1253,
    };

    return (
        <div className="subInfo">
            <Box className="productTags">
                <Tags tags={TestTags} />
            </Box>
            <Box className="productSummery">
                <Summery product={TestProduct} />
            </Box>
        </div>
    );
};

export interface TestProduct {
    pCode: number; // 상품 코드
    pName: string; // 상품 제목
    pPrice: number; // 가격
    pDay: number; // 마감일
    pOrigin: string; // 원작(야스오 -> 리그오브레전드)
    pMaterial: string; // 재질
    pSize: number; // 크기
    pWeight: number; // 무게
    pReview: number; // 후기 갯수
    pPurchase: number; // 구매 갯수
}
export default SubInfo;
