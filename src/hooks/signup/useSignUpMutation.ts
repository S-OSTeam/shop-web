import { useRecoilValue, useSetRecoilState } from 'recoil';
import { signUpState, agreementState } from '@recoil/atoms/signup/signupAtom';
import useGraphQL from '@hooks/useGraphQL';
import {
    SIGN_UP,
    CHECK_VERIFY_CODE_BY,
    SEND_VERIFY_CODE_REQUEST,
    CHECK_DUPLICATE_USER,
} from '@api/apollo/gql/mutations/LoginMutation.gql';
import { getCookie } from '@util/CookieUtil';

export const useSignUpMutation = () => {
    const signUpData = useRecoilValue(signUpState);
    const setSignUpData = useSetRecoilState(signUpState);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const agreement = useRecoilValue(agreementState);
    // console.log(agreement);
    // console.log(signUpData);
    const snsToken = signUpData.sns === 'NAVER' || signUpData.sns === 'KAKAO' ? getCookie('snsToken') : '';

    const { refetch: signUpMutation } = useGraphQL({
        query: SIGN_UP,
        type: 'mutation',
        request: signUpData,
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
            ...(snsToken && { 'Authorization-SNS': snsToken }),
        },
    });

    const { refetch: sendEmailVerification } = useGraphQL({
        query: SEND_VERIFY_CODE_REQUEST,
        type: 'mutation',
        request: { email: signUpData.email, verifyType: 'SIGNUP' },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
        },
    });

    const { refetch: checkEmailVerification } = useGraphQL({
        query: CHECK_VERIFY_CODE_BY,
        type: 'mutation',
        request: { email: signUpData.email, verifyCode: signUpData.zipcode, verifyType: 'SIGNUP' },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
        },
    });

    const { refetch: checkDuplicateUser } = useGraphQL({
        query: CHECK_DUPLICATE_USER,
        type: 'mutation',
        request: { userId: signUpData.userId, sns: signUpData.sns },
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
        },
    });

    return {
        signUpMutation,
        sendEmailVerification,
        checkEmailVerification,
        checkDuplicateUser,
        setSignUpData,
    };
};
