import React from 'react';
// import {useMutation} from '@apollo/client';
// import {getCookie} from '../../../util/Storage/Cookies';

/* FAQ 그룹내 아이템 속성 */
export interface FaqUserProps {
    /* 필요한 데이터만 요청하기 */
    // 프라이머리키: faq_아이디
    faq_id?: string;
    // FAQ 그룹테이블의 프라이머리키
    fgr_id?: string;
    // 질문내용
    faq_title?: string;
    // 답변내용
    faq_content?: string;
    // FAQ 입력시간
    faq_datetime?: string; // Date 타입 알아오기
    // FAQ 입력 IP
    faq_ip?: string
    // 프라이머리키
}
// 쿼리요청해서 받기는 로컬로 해야할듯 서버또터졌다

export const FaqItem = ({...props}: FaqUserProps) => {
    // 인증 토큰
    // const accessToken = `Bearer ${getCookie('accessToken')}`;
    // 쿼리: FAQ 데이터 요청하기 -> 해당 조회 펼치기 는 여기서 말고
    return (
        <div>
            <p>ID:{props.faq_id}</p>
            <p>ID:{props.fgr_id}</p>
            <p>ID:{props.faq_title}</p>
            <p>ID:{props.faq_datetime}</p>
            <p>ID:{props.faq_ip}</p>
        </div>
    );
}