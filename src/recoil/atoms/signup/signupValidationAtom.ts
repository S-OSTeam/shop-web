import { atom } from 'recoil';

export const signupValidationState = atom({
    key: 'signupValidationState',
    default: {
        isAccountValid: false,
        isUserValid: false,
        isAgreementChecked: false,
        checkedAgreements: [] as boolean[],
    },
});
