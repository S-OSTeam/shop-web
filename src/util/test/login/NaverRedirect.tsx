import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import useGraphQL from '@hooks/useGraphQL';
import { LOGIN_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { naverCodeState } from '@recoil/atoms/authAtom';
import { getCookie } from '@util/CookieUtil';
import { ApolloError } from '@apollo/client';

const NaverRedirect = () => {
    const navigate = useNavigate();
    const setNaverCode = useSetRecoilState(naverCodeState);

    const [naverAccessToken, setNaverAccessToken] = useState<string>('');

    const { refetch: naverLogin } = useGraphQL({
        query: LOGIN_REQUEST,
        type: 'mutation',
        request: {
            snsCode: '',
            sns: '',
        },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
            ...(naverAccessToken ? { 'Authorization-SNS': `${naverAccessToken}` } : {}),
        },
    });

    const naverCode = new URL(window.location.href).searchParams.get('code');
    // console.log(naverCode);

    useEffect(() => {
        setNaverCode(naverCode);
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
                    console.log('토큰 발급 성공:', response);
                })
                .catch((error: ApolloError) => {
                    if (error.message === '가입되지 않은 회원입니다.') {
                        alert('회원가입 페이지로 이동합니다.');

                        navigate('/signup', { state: { sns: 'NAVER' } });
                    } else {
                        console.error('다른 오류 발생:', error.message);
                    }
                    setNaverAccessToken(getCookie('snsToken'));
                });
        } else {
            console.error('naverCode가 없습니다.');
        }
    }, [naverCode]);

    useEffect(() => {
        console.log(naverAccessToken);
        if (naverAccessToken) {
            alert('회원가입 페이지로 이동합니다.');
            navigate('/signup', { state: { sns: 'NAVER' } });
        }
    }, [naverAccessToken]);

    return (
        <Box>
            <h1>로그인 중입니다...</h1>
        </Box>
    );
};

export default NaverRedirect;
