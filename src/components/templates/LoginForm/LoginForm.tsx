import React, { useCallback, useMemo, useState } from 'react';
import LoginOrganisms from '@components/organisms/login/login/Login';
import SocialLogin from '@components/organisms/login/social/SocialLogin';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useGraphQL from '@hooks/useGraphQL';
import { LOGIN_REQUEST } from '@api/apollo/gql/mutations/LoginMutation.gql';

const LoginForm = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState<{ pwd: string; userId: string; sns: string }>({
        pwd: '',
        userId: '',
        sns: 'NORMAL',
    });
    const [isFirstRender, setIsFirstRender] = useState(true); // 첫 렌더링 여부 상태 추가

    const { refetch: login } = useGraphQL({
        query: LOGIN_REQUEST,
        type: 'mutation',
        request: { ...loginId },
        option: { 'Authorization-mac': '2C-6D-C1-87-E0-B5' },
    });

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleFormSubmit = useCallback((data: { pwd: string; userId: string; sns: string }) => {
        setLoginId(data);
    }, []);

    useMemo(() => {
        // 첫 렌더링 이후에만 login 호출
        if (!isFirstRender) {
            login();
        } else {
            setIsFirstRender(false);
        }
    }, [handleFormSubmit, loginId]);

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
