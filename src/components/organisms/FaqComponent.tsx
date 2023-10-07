/* eslint-disable */
import React from 'react';
import { useQuery } from '@apollo/client';
import { Button, Typography } from '@mui/material';
import { FaqGroup } from '../molecules/FAQ/FaqGroup';
import { getCookie } from '../../util/Storage/Cookies';
import { GET_USER } from '../../api/apollo/gql/FaqUsers.gql';

/*
* gql스웨거 사용이 불가능한 상태로 오프라인으로 작업해야됨
*/
const FaqComponent = () => {
    /* 토큰 */
    const accessToken = `Bearer ${getCookie('accessToken')}`;
    // SearchRequest 뮤테이션
    const searchRequest = {
        faq_id: '',
        fgr_id: '',
        faq_title: '',
        faq_content: '',
        faq_datetime: '',
        faq_ip: '',
    };
    /* useQuery */
    const {loading, data, refetch} = useQuery(GET_USER, {
        context: {
            headers: {
                authorization: accessToken
            },
            variables: {
                searchRequest
            }
        }
    });
    /* 상태 */

    /* 메소드 */


    return(
        <>
            <Typography variant={'h1'}>또 터졌나요?</Typography>
            <Typography variant={'h2'}>또 뭔 짓거리를 하신 겁니까</Typography>
            <div>
                <Typography variant={'h3'}>문의해보세요</Typography>
                <Button>문의하기</Button>
            </div>
            <div>
                <Typography variant={'h3'}>문의내역</Typography>
                {
                    loading ?
                        (<p>조회중입니다...</p>)
                        :
                        <FaqGroup data={data}/>
                }
            </div>
        </>
    );
}