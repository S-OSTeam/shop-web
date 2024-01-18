/* eslint-disable */
import {atom} from 'recoil';

// 데이터 타입 설정하기
export type UserInquiryItemType = {
    cqa_user: string;
    // 질문 제목
    cqa_title: string;
    // 질문 내용
    cqa_content: string;
    // 질문 내용의 HTML 타입
    // cqa_content_html_type: undefined;
    // 답변 내용
    cqa_reply_content?: string;
    // 답변 내용의 HTML 타입
    // cqa_reply_html_type: undefined;
    // 질문자 회원 PK
    // mem_id: number;
    // 비밀글 여부
    cqa_secret: boolean;
    // 답변시 이메일 수신 여부
    cqa_receive_email: boolean;
    // 답변시 문자 수신 여부
    cqa_receive_sms: boolean;
    // 질문 일시 => new Date() 활용하기
    cqa_datetime: string;
    // 질문한 IP
    // cqa_ip: string;
    // 답변 일시
    cqa_reply_datetime?: string;
    // 답변한 회원 PK
    // cqa_reply_mem_id?: number;
    // 답변한 IP
    // cqa_reply_ip: string;

    // 답변 유무 처리
    cqa_reply_check?: boolean;
    // 문의 유형
    cqa_reply_type: string;

    // 질문 상품 코드 및 상품명
    cqa_item: number;
    cqa_item_full_name: string;
}



export const UserInquiryState = atom<UserInquiryItemType[]>({
    key: 'UserInquiryState',
    default: [
        {
            cqa_user: 'user0001',
            cqa_reply_check: false,
            cqa_title: '어떻게 반품0',
            cqa_content: '반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는, 반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 오버플로우 테스트 ',
            cqa_datetime: '24.01.02',
            cqa_receive_email: false,
            cqa_receive_sms: false,
            cqa_secret: true,
            cqa_reply_type: '배송',
            cqa_item: 152421,
            cqa_item_full_name: 'item1523351'
        },
        {
            cqa_user: 'user0002',
            cqa_reply_check: false,
            cqa_title: '어떻게 반품1',
            cqa_content: '반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는, 반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는',
            cqa_datetime: '24.01.02',
            cqa_receive_email: false,
            cqa_receive_sms: false,
            cqa_secret: true,
            cqa_reply_type: '배송',
            cqa_item: 155411,
            cqa_item_full_name: 'item153351'
        },
        {
            cqa_user: 'user0003',
            cqa_reply_check: false,
            cqa_title: '어떻게 반품2',
            cqa_content: '반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는, 반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는',
            cqa_datetime: '24.01.02',
            cqa_receive_email: false,
            cqa_receive_sms: false,
            cqa_secret: true,
            cqa_reply_type: '배송',
            cqa_item: 152511,
            cqa_item_full_name: 'item124351'
        },
        {
            cqa_user: 'user0004',
            cqa_reply_check: false,
            cqa_title: '어떻게 반품3',
            cqa_content: '반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는, 반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는반품을 어떻게 해야하나요 에 관련된 질문 글을 끄직여 내는중 그거 아십니까 일루미나티는',
            cqa_datetime: '24.01.02',
            cqa_receive_email: false,
            cqa_receive_sms: false,
            cqa_secret: true,
            cqa_reply_type: '배송',
            cqa_item: 15411,
            cqa_item_full_name: 'item1623351'
        },
    ]
});