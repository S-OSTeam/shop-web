export const ID_REGEX = /^[a-z]+[a-z0-9]{5,20}$/;

export const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\()\\-_+=]).{8,20}$/;

export const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;
