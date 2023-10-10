/* eslint-disable */
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FaqItemCreator } from '../molecules/FAQ/FaqItemCreator';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { faqListState } from '../../recoil/atoms/FaqItemList';

const QuestState = {
    false: '문의 하기',
    true: '문의 내역 작성중',
};

/*
 * gql스웨거 사용이 불가능한 상태로 오프라인으로 작업해야됨
 */
export const FaqComponentOff = () => {
    const pageIs = {};

    /* 토큰 */
    // const accessToken = `Bearer ${getCookie('accessToken')}`;
    /* 리코일값 가져오기 */
    const [faqEle, setFaqEle] = useRecoilState(faqListState);

    /* 상태 */
    /* 리코일 내부 아톰의 값을 가져오고 컴포넌트를 출력하는 메서드 만들기 */
    // useEffect로 특정조건 랜딩처리
    const getFaqData = () => {};

    // 버튼 클릭 이벤트 -> 참: faqCreator On
    const [isAct, setIsAct] = useState<boolean>(false);

    /* 메소드 */
    const handleOnClick = () => {
        setIsAct((current) => !current);
        console.log(isAct);
    };
    return (
        <div className="page-faq-main">
            <Typography variant={'h1'}>또 터졌나요?</Typography>
            <Typography variant={'h2'}>또 뭔 짓거리를 하신 겁니까</Typography>
            <div>
                <Typography variant={'h3'}>문의해보세요</Typography>
                <Box
                    className="faq-page-main"
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
                        sx={{
                            width: '40%',
                            color: 'white',
                            borderColor: 'white',
                            backgroundColor: 'black',
                            ':hover': {
                                borderColor: 'black',
                                color: 'black',
                                backgroundColor: 'white',
                            },
                            ':active': {
                                backgroundColor: '#2c99e3',
                                color: 'white',
                            },
                        }}
                        className={isAct ? `.faq-btn-active` : `.faq-btn-inactive`}
                        size="medium"
                        variant={'outlined'}
                    >
                        {isAct ? '문의 내역 작성중...' : '문의 하기'}
                    </Button>
                </Box>
                <FaqItemCreator isActive={isAct} />
            </div>
            <div>
                <Typography variant={'h3'}>문의내역</Typography>
                {}
            </div>
        </div>
    );
};
