import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { soicalCodeState } from '@recoil/atoms/authAtom';
import useGraphQL from '@hooks/useGraphQL';
import { LOGIN_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import { getCookie } from '@util/CookieUtil';
import { Box } from '@mui/material';

interface SocialRedirectProps {
    social: 'naver' | 'kakao' | 'google';
}

const SocialRedirect = ({ social }: SocialRedirectProps) => {
    const navigate = useNavigate();
    const [socialCode, setSocialCode] = useRecoilState(soicalCodeState);
    const [accessToken, setAccessToken] = useState<string>('');

    const { refetch: socialLogin } = useGraphQL({
        query: LOGIN_REQUEST,
        type: 'mutation',
        request: {
            snsCode: '',
            sns: '',
        },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
            ...(accessToken ? { 'Authorization-SNS': `${accessToken}` } : {}),
        },
    });

    useEffect(() => {
        const codeData: string | null = new URL(window.location.href).searchParams.get('code');
        if (codeData != null) {
            setSocialCode(codeData!);
        }
    }, []);

    useEffect(() => {
        if (socialCode) {
            socialLogin({
                variables: {
                    request: {
                        snsCode: socialCode,
                        sns: social === 'naver' ? 'NAVER' : 'KAKAO',
                    },
                },
            })
                .then((response) => {
                    console.log('토큰 발급 성공:', response);
                })
                .catch((error) => {
                    if (error.message === '가입되지 않은 회원입니다.') {
                        alert('회원가입 페이지로 이동합니다.');

                        navigate('/signup', { state: { sns: social === 'naver' ? 'NAVER' : 'KAKAO' } });
                        setAccessToken(getCookie('snsToken'));
                    } else {
                        console.error('다른 오류 발생:', error.message);
                    }
                });
        }
    }, [socialCode]);

    return (
        <Box>
            <h1>로딩 중 입니다....</h1>
        </Box>
    );
};

export default SocialRedirect;
