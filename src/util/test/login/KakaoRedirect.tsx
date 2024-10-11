/* eslint-disable */
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import axios from 'axios';
import useGraphQL from '@hooks/useGraphQL';
import { LOGIN_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { kakaoCodeState } from '@recoil/atoms/authAtom';
import { getCookie, setCookie } from '@util/CookieUtil';

const KakaoRedirect = () => {
    const navigate = useNavigate();

    const setKakaoCode = useSetRecoilState(kakaoCodeState);
    const [kakaoAccessToken, setKakaoAccessToken] = useState<string>('');

    const { refetch: kakoLogin } = useGraphQL({
        query: LOGIN_REQUEST,
        type: 'mutation',
        request: {
            snsCode: '',
            sns: '',
        },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
            ...(kakaoAccessToken ? { 'Authorization-SNS': `${kakaoAccessToken}` } : {}),
        },
    });
    const kakaoCode = new URL(window.location.href).searchParams.get('code');

    useEffect(() => {
        setKakaoCode(kakaoCode);

        if (kakaoCode) {
            kakoLogin({
                variables: {
                    request: {
                        snsCode: kakaoCode,
                        sns: 'KAKAO',
                    },
                },
            })
                .then((response) => {
                    console.log('토큰 발급 성공:', response);
                    setCookie('KakaoAccessToken', response.data.login.accessToken);
                    setCookie('KakaoRefreshToken', response.data.login.refreshToken);
                    setKakaoAccessToken(getCookie('KakaoAccessToken'));
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.error('kakaoCode가 없습니다.');
        }
    }, []);

    useEffect(() => {
        setKakaoCode(kakaoCode);
        if (kakaoCode) {
            // console.log(kakaoCode);
        }
    }, [kakaoCode]);
    useEffect(() => {
        if (kakaoAccessToken) {
            alert('회원가입 페이지로 이동합니다.');
            navigate('/signup', { state: { sns: 'KAKAO' } });
        }
    }, [kakaoAccessToken]);

    return (
        <Box>
            <h1>로그인 중입니다...</h1>
        </Box>
    );
};

export default KakaoRedirect;
