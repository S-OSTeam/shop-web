import React from 'react';
import { Box } from '@mui/material';
import AccountInfoForm from '@organisms/signup/form/AccountInfoForm';
import AgreementList from '@organisms/signup/List/AgreementList';
import UserInfoForm from '@organisms/signup/form/UserInfoForm';
import clsN from 'classnames';
import Button from '@atoms/button/Button';
import Text from '@atoms/text/Text';
import { Modal, ModalButton, ModalActions } from '@molecules/modal';
import style from './style/style.module.scss';

interface AccountInfoData {
  userId: string;
  pwd: string;
  confirmPwd: string;
  email: string;
  phone: string;
  receiveMail: boolean;
}

interface UserInfoData {
  name: string;
  birthDay: string;
  sex: boolean;
}

interface SignUpTemplateProps {
  authModalOpen: boolean;
  errorModalOpen: boolean;
  isButtonEnabled: boolean;
  onAccountInfoSubmit: (data: AccountInfoData) => void;
  onUserInfoSubmit: (data: UserInfoData) => void;
  onAgreementChange: (checked: boolean) => void;
  onSignUp: () => void;
  onCloseAuthModal: () => void;
  onCloseErrorModal: () => void;
}

const SignUpTemplate = ({
  authModalOpen,
  errorModalOpen,
  isButtonEnabled,
  onAccountInfoSubmit,
  onUserInfoSubmit,
  onAgreementChange,
  onSignUp,
  onCloseAuthModal,
  onCloseErrorModal
}: SignUpTemplateProps) => {
    return (
        <Box className={clsN(style['template-wrapper'])}>
            <Text
                className={clsN(style['template-wrapper__title'])}
                text="회원가입"
                variant="subtitle1"
                align="center"
            />

            <AccountInfoForm formInfo={onAccountInfoSubmit} />

            <UserInfoForm onSubmit={onUserInfoSubmit} />

            <AgreementList onChange={onAgreementChange} />

            <Box className={clsN(`${style['template-wrapper__btn-wrapper']}`)}>
                <Button
                    className={clsN(`${style['template-wrapper__btn-wrapper__btn']}`)}
                    onClick={onSignUp}
                    disabled={!isButtonEnabled}
                >
                    회원가입
                </Button>
            </Box>

            <Modal open={authModalOpen} onClose={onCloseAuthModal} title="회원가입 성공">
                <div className={style.modalContent}>
                    <p>회원가입이 완료되었습니다.</p>
                    <ModalActions align="center">
                        <ModalButton buttonVariant="primary" onClick={onCloseAuthModal}>
                            홈으로 이동
                        </ModalButton>
                    </ModalActions>
                </div>
            </Modal>

            <Modal open={errorModalOpen} onClose={onCloseErrorModal} title="회원가입 실패">
                <div className={style.modalContent}>
                    <p>제출양식을 확인하고 다시 입력해주세요.</p>
                    <ModalActions align="center">
                        <ModalButton buttonVariant="secondary" onClick={onCloseErrorModal}>
                            닫기
                        </ModalButton>
                    </ModalActions>
                </div>
            </Modal>
        </Box>
    );
};

export default SignUpTemplate;
