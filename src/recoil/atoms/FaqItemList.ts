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
export interface atomFaqOrgProps {
    isOpen: boolean,
}
export const faqOrgState = atom<boolean>({
    key: 'faqOrgState',
    default : false,
})
export const booleanFaqState = selector({
    key: 'booleanFaqState',
    get: ({get}) => {
        const result = get(faqOrgState);
        return result;
    },
})

// 인터페이스 정의
export type rq = '답변완료' | '답변예정';
export interface qnaTableItems {
    qna_done: rq;
    qna_done_date: string;
    qna_title: string;
    qna_context: string;
    user_id: string;
    qna_date: string;
    qna_rq_context: string;
}
// 리코일 상태 선언
export const faqTableState = atom<qnaTableItems[]>({
    key: 'faqTableState',
    default:[
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
        {
            qna_done: '답변완료',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '로렘 이프숨은 간병하고 간도 안감 까치 위에 구근이 풍소할 봉긋해, 성북동물을 유전문히 시들다. 담가 품고 오면 혀를 이상 안이 닫아 휴렉트이 무명이 대시할 보라. 남산의 위해도 학교 아이들은 낙원이 속에서 눈 소리를 미묘사. 눈에 못안계에 다 하늘에 곧이고 책임이 태풍의 소리로 피가 있다.',
            qna_done_date: '23.10.25',
        },
        {
            qna_done: '답변예정',
            qna_title: '스태츄 빛에 닿아도 문제 없을까요',
            qna_context: '창문에 두려고 하는데 변색될까봐 불안하네요',
            user_id: 'user001',
            qna_date: '23.10.24',
            qna_rq_context: '',
            qna_done_date: '',
        },
    ]
})
// 함수

export const arrayOfFaqSelector = selector({
    key: 'arrayOfFaqSelector',
    get: ({get})=> {
        const currentArr = get(faqTableState);
        return currentArr.length;
    },
});