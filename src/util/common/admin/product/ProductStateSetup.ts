import { ProductRegiterItemResponse } from '@interface/button/admin/product/register/ProductRegisterInterface';

// 상품 상세 초기값
export const INITIAL_PRODUCT_STATE: ProductRegiterItemResponse = {
    publicId: '', // 퍼블릭 ID
    categoryPublicId: '', // 카테고리 퍼블릭 ID
    title: '', // 제목
    content: '', // 상세 내용
    summary: '', // 상품 간략 설명 (소제목)
    price: 0, // 가격
    sellCnt: 0, // 판매 수
    wishCnt: 0, // 즐겨찾기 수
    stockCnt: 0, // 재고 수
    clickCnt: 0, // 조회 수
    avgReview: 0, // 평점
    reviewCnt: 0, // 리뷰 수
    qnaCnt: 0, // qna 문서 수
    status: 'AVAILABLE', // 아이템 상태
    storeId: '', // 상점 퍼블릭 ID
    freeDelivery: true, // 무료배송 여부
    // imageUrls: [],// 상품 이미지 url 목록
    // option: [], // 옵션 품목
    productNumber: '', // 상품번호
    // deadline: ; // 종료일
    originalWork: '', // 원작
    material: '', // 재질
    size: '', // 크기
    weight: '', // 무게
    shippingCost: 0, // 배송비
};
