import React, { useCallback, useEffect, useState } from 'react';
import LoginOrganisms from '@components/organisms/login/login/Login';
import SocialLogin from '@components/organisms/login/social/SocialLogin';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useGraphQL from '@hooks/useGraphQL';
import { LOGIN_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';
import { useRecoilState } from 'recoil';
import { ACCOUNT } from '@api/apollo/gql/queries/AccountQuery.gql';
import { accountAtom } from '@recoil/atoms/account/accountAtom';

const LoginForm = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState<{ pwd: string; userId: string; sns: string }>({
        pwd: '',
        userId: '',
        sns: 'NORMAL',
    });
    // 처음 랜더링 때 로그인 여부 판단하는거 잡기 위해서
    const [isFirstRender, setIsFirstRender] = useState(true);
    // 로그인 되어 있는지 판단하는 상태 관리 변수
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 유저 계정 상태를 전역으로 관리하는 변수
    const [account, setAccount] = useRecoilState(accountAtom);

    // 로그인 GraphQL 쿼리 문
    const { refetch: login } = useGraphQL({
        query: LOGIN_REQUEST,
        type: 'mutation',
        request: { ...loginId },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    // 유저 계정 데이터 정보 받아오는 GraphQL 쿼리 문
    const { data: user, refetch: userRefetch } = useGraphQL({
        query: ACCOUNT,
        type: 'query',
    });

    // 회원 가입으로 이동하는 signUp navigation
    const handleSignUp = () => {
        navigate('/signup');
    };

    /* data에 pwd, userId, sns를 props 속성 값으로 받아서 loginId 데이터 변경 */
    const handleFormSubmit = useCallback((data: { pwd: string; userId: string; sns: string }) => {
        setLoginId(data); // loginId를 업데이트
    }, []);

    /* 첫 렌더링 이후에 login 호출 후에 저장 된 쿠키를 서버로 부터 받는다.
     * 의존성 배열에 loginId를 추가하여 useCallback과 연결된 handleFormSubmit 함수가 실행 되어 loginId값이 업데이트 될 때 만
     * useEffect가 실행되게 구조를 만들어 변화가 일어날 때마다 렌더링 되는것을 방지했다. */
    useEffect(() => {
        // 첫 렌더링 이후에만 login 호출
        if (!isFirstRender) {
            login()
                .then(() => {
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.error('로그인 실패:', err);
                    setIsLoggedIn(false);
                });
        } else {
            setIsFirstRender(false);
        }
    }, [loginId]); // loginId가 변경된 후에 login 실행

    // 의존성 배열에 isLoggedIn을 추가하여 login이 되었을 때만 user계정을 스키마를 서버로 호출하게 끔 한다.
    useEffect(() => {
        if (isLoggedIn) {
            userRefetch();
        }
    }, [isLoggedIn]);

    // user 데이터 값이 업데이트 될 때마다 user 계정 값이 업데이트 되게 끔 구현 해뒀다.
    useEffect(() => {
        if (user != null) {
            setAccount(user.data);
            console.log(account);
            navigate('/');
        }
    }, [user]);

    return (
        <Box>
            {isInMobile ? (
                <Box>
                    <SocialLogin />
                    <LoginOrganisms handleSignUp={handleSignUp} handleFormSubmit={handleFormSubmit} />
                </Box>
            ) : (
                <Box>
                    <LoginOrganisms handleSignUp={handleSignUp} handleFormSubmit={handleFormSubmit} />
                    <SocialLogin />
                </Box>
            )}
        </Box>
    );
};

export default LoginForm;
