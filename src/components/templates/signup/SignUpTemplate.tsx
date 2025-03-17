import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import AccountInfoForm from '@organisms/signup/form/AccountInfoForm';
import AgreementList from '@organisms/signup/List/AgreementList';
import UserInfoForm from '@organisms/signup/form/UserInfoForm';
import clsN from 'classnames';
import Button from '@atoms/button/Button';
import Text from '@atoms/text/Text';
import Modal from '@molecules/modal/Modal';
import useGraphQL from '@hooks/useGraphQL';
import { getCookie } from '@util/CookieUtil';
import { SIGN_UP } from '@api/apollo/gql/mutations/LoginMutation.gql';
import { signUpState } from '@recoil/atoms/signup/signupAtom';
import { signupValidationState } from '@recoil/atoms/signup/signupValidationAtom';
import style from './style/style.module.scss';

const SignUpTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const snsValue = location.state?.sns || 'NORMAL';
    const snsToken = snsValue === 'NAVER' || snsValue === 'KAKAO' ? getCookie('snsToken') : '';

    const [signUpData, setSignUpData] = useRecoilState(signUpState);

    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const validationState = useRecoilValue(signupValidationState);
    const isButtonEnabled =
        validationState.isAccountValid && validationState.isUserValid && validationState.isAgreementChecked;

    const { refetch } = useGraphQL({
        query: SIGN_UP,
        type: 'mutation',
        request: signUpData,
        option: {
            'Authorization-mac': '2C-6D-C1-87-E0-B5',
            ...(snsToken && { 'Authorization-SNS': snsToken }),
        },
    });

    const handleAccountInfo = (accountData: {
        userId: string;
        pwd: string;
        confirmPwd: string;
        email: string;
        phone: string;
        receiveMail: boolean;
    }) => {
        console.log(accountData);
    };

    const handleUserInfo = (data: { name: string; birthDay: string; sex: boolean }) => {
        const formattedBirthday = new Date(data.birthDay).toISOString();
        setSignUpData((prev) => ({
            ...prev,
            userName: data.name,
            birthday: formattedBirthday,
            sex: data.sex,
        }));
    };

    const signUpHandler = () => {
        if (signUpData.birthday) {
            try {
                setSignUpData((prev) => ({
                    ...prev,
                    birthday: new Date(signUpData.birthday).toISOString(),
                }));
            } catch (error) {
                setErrorModalOpen(true);
                return;
            }
        }

        console.log('요청 데이터:', signUpData);

        refetch({
            variables: {
                input: signUpData,
            },
        })
            .then(() => setAuthModalOpen(true))
            .catch(() => setErrorModalOpen(true));
    };

    return (
        <Box className={clsN(style['template-wrapper'])}>
            <Text
                className={clsN(style['template-wrapper__title'])}
                text="회원가입"
                variant="subtitle1"
                align="center"
            />

            <AccountInfoForm formInfo={handleAccountInfo} />

            <UserInfoForm onSubmit={handleUserInfo} />

            <AgreementList onChange={(checked) => setSignUpData((prev) => ({ ...prev, receiveMail: checked }))} />

            <Box className={clsN(`${style['template-wrapper__btn-wrapper']}`)}>
                <Button
                    className={clsN(`${style['template-wrapper__btn-wrapper__btn']}`)}
                    onClick={signUpHandler}
                    disabled={!isButtonEnabled}
                >
                    회원가입
                </Button>
            </Box>

            <Modal open={authModalOpen} onClose={() => navigate('/')} title="회원가입 성공">
                <p>회원가입이 완료되었습니다.</p>
                <Button onClick={() => navigate('/')}>닫기</Button>
            </Modal>

            <Modal open={errorModalOpen} onClose={() => setErrorModalOpen(false)} title="회원가입 실패">
                <p>제출양식을 확인하고 다시 입력해주세요.</p>
                <Button onClick={() => setErrorModalOpen(false)}>닫기</Button>
            </Modal>
        </Box>
    );
};

export default SignUpTemplate;
