import { atom } from 'recoil';

// 인터페이스
export interface noticesFilterState {
    /// 시작일자
    startDate?: Date;
    /// 종료일자
    endDate?: Date;
    /// 유형
    category: 'all' | 'general' | 'event' | 'update' | 'emergency';
    /// 상태
    postStatus: 'all' | 'posted' | 'private';
    /// 키워드
    keyword?: string;
}

export const noticesFilterStateAtom = atom<noticesFilterState>({
    key: 'noticesFilterStateAtom',
    default: {
        startDate: undefined,
        endDate: undefined,
        category: 'all',
        postStatus: 'all',
        keyword: undefined,
    },
});
