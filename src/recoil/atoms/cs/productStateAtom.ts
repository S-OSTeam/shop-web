import {atom} from 'recoil';

// 슬롯별 인터페이스
export interface slotType{
    // 이름
    name: string;
    // 수량
    amount: number;
    // 업데이트일
    date: string;
}

export interface productStateType{
    // 전시중
    onDisplay: slotType;
    // 임시저장
    exhibition: slotType;
    // 비활성
    inactive: slotType;
}

export const productStateAtom = atom<productStateType>({
    key: 'productStateAtom',
    default:{
        onDisplay:{
           name: '등록 상품',
           amount: 52,
           date: '2024-01-01'
        },
        exhibition:{
            name: '등록전 상품',
            amount: 16,
            date: '2024-01-01'
        },
        inactive:{
            name: '비공개/기타 상품',
            amount: 24,
            date: '2024-01-01'
        }
    }
})