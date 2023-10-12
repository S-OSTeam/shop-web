/* eslint-disable */
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FaqItemCreator } from '../molecules/FAQ/FaqItemCreator';
import { useSetRecoilState } from 'recoil';
import { atomFaqItem, faqListState } from '../../recoil/atoms/FaqItemList';
import { NestedList } from '../atoms/FAQ/NestedList';

/*
 * gql스웨거 사용이 불가능한 상태로 오프라인으로 작업해야됨
 */
export const FaqComponentOff = () => {
    /* 토큰 */
    // const accessToken = `Bearer ${getCookie('accessToken')}`;

    /* 상태 */
    /* 리코일 내부 아톰의 값을 가져오고 컴포넌트를 출력하는 메서드 만들기 */

    // useEffect로 특정조건 랜딩처리

    // 버튼 클릭 이벤트 -> 참: faqCreator On
    const [isAct, setIsAct] = useState<boolean>(false);

    /* 메소드 */
    const handleOnClick = () => {
        setIsAct((current) => !current);
        console.log(isAct);
    };
    return (
        <div className='page-faq-main'>
            <div className='faq-top-banner'>
                <Typography variant={'h1'}>또 터졌나요?</Typography>
                <Typography variant={'h2'}>또 뭔 짓거리를 하신 겁니까</Typography>

                <div>
                    <Typography variant={'h3'}>
                        문의해보세요
                    </Typography>
                    <Box
                        className='faq-page-main'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'middle',
                            fontSize: '16px',
                            padding: '5px 10px',
                        }}
                    >
                        <Button
                            onClick={handleOnClick}
                            className={isAct ? `.faq-btn faq-btn-active` : `.faq-btn faq-btn-inactive`}
                            size='medium'
                            variant={'outlined'}
                        >
                            {isAct ? '문의 내역 작성중...' : '문의 하기'}
                        </Button>
                    </Box>
                    <FaqItemCreator isActive={isAct} />
                </div>
            </div>
            <div className='listWrapper'>
                <NestedList />
            </div>
        </div>
    );
};
