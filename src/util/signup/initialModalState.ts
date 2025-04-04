import { SignUpInitInterface } from '@interface/signup/SignUpInitInterface';

export const initialModalState: SignUpInitInterface = {
    emailSent: false,
    emailFailed: false,
    authSuccess: false,
    authFailed: false,
    duplicateCheckSuccess: false,
    duplicateCheckFailed: false,
    emptyZipcode: false,
};
