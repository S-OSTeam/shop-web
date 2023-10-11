interface TestProduct {
    imgs: string[]; // 이미지
    productId: string; // 상품 코드
    pName: string; // 피규어명
    manufacture: string; // 제조사
    pOrigin: string; // 피규어 원산지
    texture: string; // 재질
    pSize: number; // 피규어 사이즈(cm 기준)
    pWeight: number; // 피규어 무게(kg 기준)
    price: number; // 가격(원 기준)
}

export default TestProduct;
