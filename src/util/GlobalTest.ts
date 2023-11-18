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
    pReviewTwo: 30,
    pReviewThree: 100,
    pReviewFour: 170,
    pReviewFive: 255,
    pPurchase: 1253,
};

export const TestOption = [
    { id: 1, price: 0, option: '단일 상품' },
    { id: 2, price: 1000, option: 'first option' },
    { id: 3, price: 5000, option: 'second option' },
];

export const Reviews = {
    writer: '냄정수',
    registerDate: '2023-01-15',
    review: '4.0',
    reviewTitle: '빠른 배송 좋아요.',
    reviewDetail:
        '나도 어디서 꿀리진 않어 아직 쓸만한 걸 죽지 않았어\n' +
        '너하나 때문에 망가진 몸 사라진 꿈 불타는 맘\n' +
        '널 위해서라면 이 한 몸 날려 니가 있는 곳이면 달려\n' +
        '하지만 그댄 내게 안녕 또 안녕\n' +
        '넌 내가 싫다고 이유가 뭐냐고\n' +
        '짜증난 니 표정이 모든 걸 말해줘 슬프게 해\n' +
        '그래도 좋다고 기회를 달래도\n' +
        '한 번 돌아선 니 모습 차가운 그 눈빛이 싫어요',
    recommendation: '123',
    image: 'choco1.jpg',
    option: '없음',
};

export const FAQ = {
    status: false,
    faqTitle: '자주 묻는 질문 및 답변',
    writer: '냄정수',
    registerDate: '2023-01-15',
};

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

export interface ReviewData {
    writer: string;
    registerDate: string;
    review: string;
    option: string;
    reviewTitle: string;
    reviewDetail: string;
    recommendation: string;
    image: string;
}

export interface FAQData {
    status: boolean;
    faqTitle: string;
    writer: string;
    registerDate: string;
}
