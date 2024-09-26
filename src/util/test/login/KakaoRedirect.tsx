/* eslint-disable */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import axios from 'axios';
import useGraphQL from '@hooks/useGraphQL';
import { LOGIN_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { kakaoCodeState } from '@recoil/atoms/authAtom';

const KakaoRedirect = () => {
    const navigate = useNavigate();
    const K_REDIRECT_URI = `http://localhost:3000/kakao/redirect`;
    const kakaoCode = new URL(window.location.href).searchParams.get('code');
    const setKakaoCode = useSetRecoilState(kakaoCodeState);
    const APP_KEY = `${process.env.REACT_APP_KAKAO_CLIENT_KEY}`;
    const CLIENT_SECRET = `${process.env.REACT_APP_KAKAO_CLIENT_SECRET}`;
    const { refetch: kakoLogin } = useGraphQL({
        query: LOGIN_REQUEST,
        type: 'mutation',
        request: {
            snsCode: '',
            sns: '',
        },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const KAKAO = () => {
        kakoLogin({
            variables: {
                request: {
                    snsCode: kakaoCode,
                    sns: 'KAKAO',
                },
            },
        })
            .then((response) => {
                console.log('로그인 성공:', response);
                alert('카카오 로그인에 성공하였습니다!');
                navigate('/');
            })
            .catch(() => {
                alert('회원가입 페이지로 이동합니다.');
                navigate('/signup', { state: { sns: 'KAKAO' } });
            });
    };
    const getToken = async () => {
        try {
            const res = await axios.post(
                'https://kauth.kakao.com/oauth/token',
                {
                    grant_type: 'authorization_code',
                    client_id: APP_KEY,
                    redirect_uri: K_REDIRECT_URI,
                    code: kakaoCode,
                    client_secret: CLIENT_SECRET,
                },
                {
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    },
                },
            );

            console.log('Access Token:', res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setKakaoCode(kakaoCode);
        if (kakaoCode) {
            // console.log(kakaoCode);
            KAKAO();
            // getToken();
        }
    }, [kakaoCode]);

    return (
        <Box>
            <h1>로그인 중입니다...</h1>
        </Box>
    );
};

export default KakaoRedirect;
