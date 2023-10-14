import React from 'react';
import { atomFaqItem } from '../../../../recoil/atoms/FaqItemList';
// import {useMutation} from '@apollo/client';
// import {getCookie} from '../../../util/Storage/Cookies';

/* FAQ 그룹내 아이템 속성 */

// 쿼리요청해서 받기는 로컬로 해야할듯 서버또터졌다

export const FaqItem = ({...props}: atomFaqItem) => {

    // 인증 토큰
    // const accessToken = `Bearer ${getCookie('accessToken')}`;
    // 쿼리: FAQ 데이터 요청하기 -> 해당 조회 펼치기 는 여기서 말고
    return (
        <li key={props.faq_ip}>
            <p>문의 ID : {props.faq_id}</p>
            <p>그룹 ID : {props.fgr_id}</p>
            <p>제목 : {props.faq_title}</p>
            <p>등록일 : {props.faq_datetime}</p>
            <p>IP : {props.faq_ip}</p>
            <p>익명글 여부 : {props.faq_is_private.toString()}</p>
            <p>SNS 알림 : {props.faq_alert_sns.toString()}</p>
            <p>MAIL 알림 :{props.faq_alert_mail.toString()}</p>
        </li>
    );
}