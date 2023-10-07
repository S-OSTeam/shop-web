import { gql } from '@apollo/client';
// FAQ 데이터 요청: 쿼리문
export const GET_USER = gql`
    query GetUser($request: SearchRequest) {
        getUser(request: $request){
            # 프라이머리키: faq_아이디
            faq_id
            # FAQ 그룹테이블의 프라이머리키
            fgr_id
            # 질문내용
            faq_title
            # 답변내용
            faq_content
            # FAQ 입력시간
            faq_datetime
            # FAQ 입력 IP
            faq_ip
        }
    }
`;

// FAQ 데이터 추가: 뮤테이션
export const CREATE_OR_UPDATE_USER=gql`
    mutation CreateOrUpdateUser($request: UserRequest){
        createOrUpdateUser(request: $request){
            # 프라이머리키: faq_아이디
            faq_id
            # FAQ 그룹테이블의 프라이머리키
            fgr_id
            # 질문내용
            faq_title
            # 답변내용
            faq_content
            # FAQ 입력시간
            faq_datetime
            # FAQ 입력 IP
            faq_ip
        }
    }
`;
