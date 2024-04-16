export enum Month{
    JAN = 1,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC
};
interface totalIncomeProps {
    // 총 판매
    totalSold: number,
    // 총 수익
    sellingPrice: number,
    // 총 환불
}

// 열거형이 숫자를 인덱싱하는 타입을 할수 있도록 정의
interface MonthEnumIndex{
    [key:number]: totalIncomeProps[] | undefined;
}

interface ChartSeriesProps{
    // 년도
    year: number,
    /* 월마다 판매 관련 데이터를 가짐 */
    // Month 의 키값을 사용해 월마다 타입을 지정
    history: MonthEnumIndex;
}

export const AnnualIncomeItem:ChartSeriesProps[] = [
    {
        year: 2024,
        history: {
            [Month.JAN]: [{totalSold: 32,sellingPrice: 732130}],
            [Month.FEB]: [{totalSold: 25,sellingPrice: 635320}],
            [Month.MAR]: [{totalSold: 16,sellingPrice: 355150}],
            [Month.APR]: [{totalSold: 22,sellingPrice: 537560}],
        }
    },

]