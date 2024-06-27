import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation SignUp($request: signUpRequest!) {
        signUp(request: $request)
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
