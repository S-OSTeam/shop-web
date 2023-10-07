/* eslint-disable */
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
/*
* gql스웨거 사용이 불가능한 상태로 오프라인으로 작업해야됨
*/
export const FaqComponentOff = () => {
    /* 토큰 */
    // const accessToken = `Bearer ${getCookie('accessToken')}`;

    /* 상태 */
    const [isAct, setIsAct] = useState<boolean>(false);

    /* 메소드 */
    const onOpenCompo = () => {
        setIsAct(prevState => !prevState);
    }

    return (
        <div className='page-faq-main'>
            <Typography variant={'h1'}>또 터졌나요?</Typography>
            <Typography variant={'h2'}>또 뭔 짓거리를 하신 겁니까</Typography>
            <div>
                <Typography variant={'h3'}>문의해보세요</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'middle',
                    fontSize: '16px',
                    padding: '5px 10px',
                }}>
                    <Button
                        sx={{
                            width: "40%",
                            color:'white',
                            borderColor: 'white',
                            backgroundColor: 'black',
                            ":hover":{
                                borderColor: 'black',
                                color: 'black',
                                backgroundColor: 'white',
                            }
                        }}
                        className='faq-btn'
                        size='medium'
                        variant={'outlined'}
                    >문의하기
                    </Button>
                </Box>
                {
                    isAct &&
                }

            </div>
            <div>

                <Typography variant={'h3'}>문의내역</Typography>
                {

                }
            </div>
        </div>
    );
};