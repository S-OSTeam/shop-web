import React from 'react';

export interface ProductEventType {
    event: 'regist' | 'load' | 'template';
}

export interface ProductRegisterButtonProps<T> {
    className?: string; // 클래스명
    items: T[]; // 제너릭 컨텐츠
    itemFactor: (item: T, index: number) => React.ReactNode; //  제너릭 타입 렌더
    event: ProductEventType['event'];
    onClick: () => void;
}

// 아이템 상태 : 예약 | 중단 | 삭제 | 마감 | 이용가능
type ItemStatus = 'RESERVED' | 'SUSPENDED' | 'DELETED' | 'SOLDOUT' | 'AVAILABLE';

export interface ProductRegiterItemResponse {
    // 퍼블릭 ID
    publicId: string;
    // 카테고리 퍼블릭 ID
    categoryPublicId?: string;
    // 제목
    title: string;
    // 상세 내용
    content: string;
    // 상품 간략 설명 (소제목)
    summary: string;
    // 가격
    price: number;
    // 판매 수
    sellCnt: number;
    // 즐겨찾기 수
    wishCnt: number;
    // 재고 수
    stockCnt: number;
    // 조회 수
    clickCnt: number;
    // 평점
    avgReview: number;
    // 리뷰 수
    reviewCnt: number;
    // qna 문서 수
    qnaCnt: number;
    // 아이템 상태
    status: ItemStatus;
    // 상점 퍼블릭 ID
    storeId: string;
    // 무료배송 여부
    freeDelivery: boolean;
    // 상품 이미지 url 목록
    imageUrls?: [string];
    // 옵션 품목
    option?: [string];
    // 상품번호
    productNumber: string;
    // 종료일
    deadline?: Date;
    // 원작
    originalWork: string;
    // 재질
    material: string;
    // 크기
    size: string;
    // 무게
    weight: string;
    // 배송비
    shippingCost: number;
}
