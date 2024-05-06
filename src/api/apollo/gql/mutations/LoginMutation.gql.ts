import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation SignUp($request: signUpRequest!) {
        signUp(request: $request)
    }
`;

export const SEND_VERIFY_CODE_REQUEST = gql`
    mutation ($request: SendVerifyCodeRequest!) {
        sendVerifyCode(request: $request)
    }
`;

export const CHECK_VERIFY_CODE_BY = gql`
    mutation ($request: CheckVerifyCodeRequest!) {
        checkVerifyCodeBy(request: $request)
    }
`;

export const Login = gql`
    mutation LOGIN($request: LoginRequest!) {
        login(request: $request) {
            accessToken
            refreshToken
            issuedAt
        }
    }
`;
