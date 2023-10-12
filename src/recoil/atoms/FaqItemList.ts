/*eslint-disable*/
import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';
// FaqListState

// 리코일 인터페이스 정의
export interface atomFaqItem {
    faq_id: string;
    fgr_id: string;
    faq_title: string;
    faq_content: string;
    faq_datetime: string;
    faq_ip: string;
    faq_is_private: boolean;
    faq_alert_sns: boolean;
    faq_alert_mail: boolean;
}
// 리코일 상태 생성
export const faqListState = atom<atomFaqItem[]>({
    key: 'faqListState',
    default: [
        {
            faq_id: '0userId',
            fgr_id: '0userGroupId',
            faq_title: '배송기간 문의드립니다.',
            faq_content: '추석엔 얼마나 걸리나요',
            faq_datetime: '2023-00-00/00시00분',
            faq_ip: '123.324',
            faq_is_private: false,
            faq_alert_sns: false,
            faq_alert_mail: false,
        },
    ],
});
// Get
export const faqSelector = selector({
    key: 'faqSelector',
    get: ({ get }) => get(faqListState),
    set: ({ set }, newObj) => set(faqListState, newObj),
});
