export const GlobalTest = () => {};

export const Testaddress = [
    // 테스트 뎁스 주소
    { id: 1, address: '뎁스1' },
    { id: 2, address: '뎁스2' },
    { id: 3, address: '뎁스3' },
];

export const TestTags = ['20267', '레전', '피규어', '캐릭터'];

export const TestImage = ['avengers.jpg', 'choco1.jpg', 'choco2.jpg', 'choco3.jpg'];

export const TestProduct = {
    pCode: 13515124,
    pName: '테스트피규어1',
    pPrice: 31930,
    pDay: 4,
    pOrigin: '어벤져스-엔드게임',
    pMaterial: '고무',
    pSize: 123,
    pWeight: 1.23,
    pReviewOne: 0,
    pReviewTwo: 3,
    pReviewThree: 350,
    pReviewFour: 20,
    pReviewFive: 55,
    pPurchase: 1253,
};

export const TestOption = [
    { id: 1, price: 0, option: '단일 상품' },
    { id: 2, price: 1000, option: 'first option' },
    { id: 3, price: 5000, option: 'second option' },
];

export interface DepthAddress {
    id: number;
    address: string;
}

export interface OptionItem {
    id: number;
    price: number;
    option: string;
}

export interface ProductItem {
    pCode: number; // 상품 코드
    pName: string; // 상품 제목
    pPrice: number; // 가격
    pDay: number; // 마감일
    pOrigin: string; // 원작(야스오 -> 리그오브레전드)
    pMaterial: string; // 재질
    pSize: number; // 크기
    pWeight: number; // 무게
    pReviewOne: number; // 1점
    pReviewTwo: number; // 1점
    pReviewThree: number; // 1점
    pReviewFour: number; // 1점
    pReviewFive: number; // 1점
    pPurchase: number; // 구매 갯수
}

export interface PieChartData {
    label: string;
    value: number;
}
