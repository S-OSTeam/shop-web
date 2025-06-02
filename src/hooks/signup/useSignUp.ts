import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { signUpState } from '@recoil/atoms/signup/signupAtom';
import { signupValidationState } from '@recoil/atoms/signup/signupValidationAtom';
import useGraphQL from '@hooks/useGraphQL';
import { SIGN_UP } from '@api/apollo/gql/mutations/LoginMutation.gql';

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

export const useSignUp = (snsToken = '') => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useRecoilState(signUpState);
  const validationState = useRecoilValue(signupValidationState);

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const isButtonEnabled =
    validationState.isAccountValid && validationState.isUserValid && validationState.isAgreementChecked;

  const { refetch } = useGraphQL({
    query: SIGN_UP,
    type: 'mutation',
    request: signUpData,
    option: {
      'Authorization-mac': '2C-6D-C1-87-E0-B5',
      ...(snsToken && { 'Authorization-SNS': snsToken }),
    } as Record<string, string>,
  });

  const handleAccountInfo = (accountData: AccountInfoData) => {
    console.log(accountData);
  };

  const handleUserInfo = (data: UserInfoData) => {
    const formattedBirthday = new Date(data.birthDay).toISOString();
    setSignUpData((prev) => ({
      ...prev,
      userName: data.name,
      birthday: formattedBirthday,
      sex: data.sex,
    }));
  };

  const handleAgreementChange = (checked: boolean) => {
    setSignUpData((prev) => ({ ...prev, receiveMail: checked }));
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


    refetch({
      variables: {
        input: signUpData,
      },
    })
      .then(() => setAuthModalOpen(true))
      .catch(() => setErrorModalOpen(true));
  };

  const closeAuthModal = () => {
    navigate('/');
  };

  const closeErrorModal = () => {
    setErrorModalOpen(false);
  };

  return {
    signUpData,
    authModalOpen,
    errorModalOpen,
    isButtonEnabled,
    handleAccountInfo,
    handleUserInfo,
    handleAgreementChange,
    signUpHandler,
    closeAuthModal,
    closeErrorModal,
  };
}; 