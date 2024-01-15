import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation SignUp($request: signUpRequest!) {
        signUp(request: $request)
    }
`;

export const Login = gql`
    mutation Login($request: loginRequest!) {
        login(request: $request)
    }
`;

export const ReIssue = gql`
    mutation Reissue($request: tokenResponse) {
        reIssue(request: $request)
    }
`;
