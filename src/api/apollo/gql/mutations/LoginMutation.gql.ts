import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation SignUp($request: SignUpRequest!) {
        signUp(request: $request)
    }
`;
export const SIGN_UP_REQUEST = gql`
    mutation ($request: SignUpRequest!) {
        signUp(request: $request)
    }
`;
export const SEND_VERIFY_CODE_REQUEST = gql`
    mutation ($request: SendVerifyCodeRequest!) {
        sendVerifyCode(request: $request)
    }
`;

export const LOGIN_REQUEST = gql`
    mutation LOGIN($request: LoginRequest!) {
        login(request: $request) {
            accessToken
            refreshToken
        }
    }
`;
