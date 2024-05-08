import React from 'react';
import styles from './styles/Product.module.scss';

interface ProductProps {
    /** 고유 ID */
    publicId: number;
    /** 카테고리 */
    categoryPublicId: string;
    /** 평점 */
    avgReview: number;
    /** 구매 후기 건 */
    reviewCnt: number;
    /** 판매 수량 */
    sellCnt: number;
    /** 상품 번호 */
    productNumber: number;
    /** 상품명 */
    title: string;
    /** 판매 가격 */
    price: number;
    /** 판매 마감일 */
    /** 상품 옵션 데이터 */

}

const Product = (
    {

    }:ProductProps
) => {
    return(
        <>
        </>
    );

}

export default Product;