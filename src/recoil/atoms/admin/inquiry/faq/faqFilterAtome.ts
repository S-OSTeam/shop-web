import { atom } from 'recoil';

// 인터페이스
export interface faqFilterState {
    startDate?: Date; // 시작일
    endDate?: Date; // 종료일
    category: 'all' | 'announce' | 'delivery' | 'return' | 'refund'; // 유형
    postStatus: 'all' | 'posted' | 'private'; // 공개 상태
    keyword?: string; // 키워드
}

export const faqFilterStateAtom = atom<faqFilterState>({
    key: 'faqFilterStateAtom',
    default: {
        startDate: undefined,
        endDate: undefined,
        category: 'all',
        postStatus: 'all',
        keyword: undefined,
    },
});
