import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation SignUp($request: signUpRequest!) {
        signUp(request: $request)
    }
`;

export const SEND_VERIFY_CODE = gql`
    mutation ($request: SendVerifyCodeRequest!) {
        sendVerifyCode(request: $request)
    }
`;

export const Login = gql`
    mutation ($request: LoginRequest!) {
        login(request: $request) {
            accessToken
            refreshToken
        }
    }
`;
export const NAVER_LOGIN = gql`
    mutation NaverLogin($request: NaverRequest!) {
        naverLogin(request: $request) {
            code
            state
        }
    }
`;

export const KAKAO_LOGIN = gql`
    mutation KakaoLogin($request: KakaoRequest!) {
        kakaoLogin(request: $request) {
            code
            state
        }
    }
`;
