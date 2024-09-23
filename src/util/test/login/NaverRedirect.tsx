import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import useGraphQL from '@hooks/useGraphQL';
import { LOGIN_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import { useNavigate } from 'react-router-dom';

const NaverRedirect = () => {
    const navigate = useNavigate();
    const { refetch: naverLogin } = useGraphQL({
        query: LOGIN_REQUEST,
        type: 'mutation',
        request: {
            snsCode: '',
            sns: '',
        },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const naverCode = new URL(window.location.href).searchParams.get('code');
    console.log(naverCode);
    useEffect(() => {
        if (naverCode) {
            naverLogin({
                variables: {
                    request: {
                        snsCode: naverCode,
                        sns: 'NAVER',
                    },
                },
            })
                .then((response) => {
                    console.log('로그인 성공:', response);
                    alert('네이버 로그인에 성공하였습니다!');
                    navigate('/');
                })
                .catch(() => {
                    alert('회원가입 페이지로 이동합니다.');
                    navigate('/signup', { state: { sns: 'NAVER' } });
                    // 여기다가 회원가입 페이지로 이동합니다!
                    // 하고 일반회원가입 시키면됨
                });
        } else {
            console.error('naverCode가 없습니다.');
        }
    }, [naverCode]);

    return (
        <Box>
            <h1>로그인 중입니다...</h1>
        </Box>
    );
};

export default NaverRedirect;
