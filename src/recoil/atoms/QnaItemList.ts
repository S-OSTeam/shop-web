import { atom } from 'recoil';

// 리코일 인터페이스
export interface QnaItemInterface {
    // 번호
    cqa_id: number;
    // 상품코드
    cit_id: number;
    // 문의 유형
    cqa_type: string;
    // 제목
    cqa_title: string;
    // 질문 내용
    cqa_content: string;
    // 답변 내용
    cqa_reply_content?: string;
    // 유저명 정확히는 PK
    mem_id: number;
    // 질문 일시 json에서 Date 객체를 지원하지 않기때문에 string을 받고 나중에 Date로 저장하기
    cqa_datetime: string;
    // 답변 일시
    cqa_reply_datetime: string;
    // 처리상태
    cqa_is_replied: boolean;
    // 답변여부 --> 이건 따로 버튼으로 모달 구현하기
    /* 컨텐츠 관련 */
}

// 리코일 상태 생성
export const QnaItemsState = atom<QnaItemInterface[]>({
    key: 'QnaItemsState',
    default: [
        {
            cqa_id: 0,
            cit_id: 123,
            cqa_type: '배송',
            cqa_title: 'TitleTest',
            mem_id: 0,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: true,
            cqa_reply_content: 'replied content',
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 1,
            cit_id: 1121,
            cqa_type: '반품',
            cqa_title: 'TitleTest',
            mem_id: 1,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 2,
            cit_id: 1822,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 2,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 3,
            cit_id: 1722,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 3,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 4,
            cit_id: 6122,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 4,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 5,
            cit_id: 5122,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 5,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 6,
            cit_id: 1122,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 6,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 7,
            cit_id: 13522,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 7,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 8,
            cit_id: 12452,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 8,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 9,
            cit_id: 12511,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 9,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 10,
            cit_id: 15322,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 10,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 11,
            cit_id: 125512,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 11,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 12,
            cit_id: 13422,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 12,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 13,
            cit_id: 11122,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 13,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 14,
            cit_id: 12432,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 14,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 15,
            cit_id: 12456,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 15,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 16,
            cit_id: 15442,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 16,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 17,
            cit_id: 5114,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 17,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
        {
            cqa_id: 18,
            cit_id: 1463,
            cqa_type: '질문',
            cqa_title: 'TitleTest',
            mem_id: 18,
            cqa_datetime: '24.01.01',
            cqa_reply_datetime: '24.01.01',
            cqa_is_replied: false,
            cqa_content: 'cqa content',
        },
    ],
});