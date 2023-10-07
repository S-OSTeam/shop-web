import React from 'react';
import {atom, selector, useRecoilValue} from 'recoil';
import {useSetRecoilState} from 'recoil';
// FaqListState

// 아톰 인터페이스 정의
export interface FaqItem {
    faq_id: string;
    fgr_id: string;
    faq_title: string;
    faq_content: string;
    faq_datetime: string;
    faq_ip: string;
}
// 아톰 선언
export const faqListState = atom<FaqItem[]>({
    key: "faqListState",
    default: [{
        faq_id: "0userId",
        fgr_id: "0userGroupId",
        faq_title: "배송기간 문의드립니다.",
        faq_content: "추석엔 얼마나 걸리나요",
        faq_datetime: "2023-00-00/00시00분",
        faq_ip: "123.324"
    }],
});