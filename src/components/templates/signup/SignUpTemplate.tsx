import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import AccountInfoForm from '@organisms/signup/form/AccountInfoForm';
import AgreementList from '@organisms/signup/List/AgreementList';
import UserInfoForm from '@organisms/signup/form/UserInfoForm';
import clsN from 'classnames';
import { EmptyFormDataInterface, FormDataInterface } from '@interface/FormDataInterface';
import Button from '@atoms/button/Button';
import Text from '@atoms/text/Text';
import Modal from '@molecules/modal/Modal';
import useGraphQL from '@hooks/useGraphQL';
import { getCookie } from '@util/CookieUtil';
import { SIGN_UP } from '@api/apollo/gql/mutations/LoginMutation.gql';
import style from './style/style.module.scss';

const SignUpTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const snsValue = location.state?.sns || 'NORMAL';
    const snsToken = snsValue === 'NAVER' || snsValue === 'KAKAO' ? getCookie('snsToken') : '';

    const [signUpData, setSignUpData] = useState<FormDataInterface>({ ...EmptyFormDataInterface, sns: snsValue });
    const [checkBox, setCheckBox] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);

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
        console.log('handleAccountInfoClicked!!');
        console.log(accountData);
    };

    const handleUserInfo = (data: { name: string; birthDay: string; sex: boolean }) => {
        const updatedFormData: FormDataInterface = {
            ...signUpData, // 기존 데이터 유지
            userName: data.name,
            birthday: new Date(data.birthDay),
            sex: data.sex,
            receiveMail: checkBox,
        };
        setSignUpData(updatedFormData);
    };

    const signUpHandler = () => {
        refetch()
            .then(() => setAuthModalOpen(true))
            .catch(() => setErrorModalOpen(true));
    };

    return (
        <Box>
            <Text text="회원가입" variant="subtitle1" align="center" />

            <AccountInfoForm formInfo={handleAccountInfo} />
            <UserInfoForm onSubmit={handleUserInfo} />
            <AgreementList onChange={setCheckBox} />

            <Box className={clsN(`${style['btn-wrapper']}`)}>
                <Button onClick={signUpHandler}>회원가입</Button>
            </Box>

            {/* 회원가입 성공 모달 */}
            <Modal open={authModalOpen} onClose={() => navigate('/')} title="회원가입 성공">
                <p>회원가입이 완료되었습니다.</p>
                <Button onClick={() => navigate('/')}>닫기</Button>
            </Modal>

            {/* 회원가입 실패 모달 */}
            <Modal open={errorModalOpen} onClose={() => setErrorModalOpen(false)} title="회원가입 실패">
                <p>제출양식을 확인하고 다시 입력해주세요.</p>
                <Button onClick={() => setErrorModalOpen(false)}>닫기</Button>
            </Modal>
        </Box>
    );
};

export default SignUpTemplate;
