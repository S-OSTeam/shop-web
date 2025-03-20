import React from 'react';
import { useRecoilState } from 'recoil';
import { signupValidationState } from '@recoil/atoms/signup/signupValidationAtom';
import { Box, Divider } from '@mui/material';
import CheckboxWithText from '@molecules/checkbox/checkboxWithText/CheckboxWithText';
import clsN from 'classnames';
import style from './style/style.module.scss';

interface AgreementListProps {
    onChange: (checked: boolean) => void;
}

const AgreementList = ({ onChange }: AgreementListProps) => {
    const [validationState, setValidationState] = useRecoilState(signupValidationState);

    const checkboxTexts = ['SNS 광고에 대한 동의', '기타 고객정보 영리적 사용에 대한 동의'];

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedCheckedState = [...validationState.checkedAgreements];
        updatedCheckedState[index] = e.target.checked;

        const isAllChecked = updatedCheckedState.length === checkboxTexts.length && updatedCheckedState.every(Boolean);

        setValidationState((prev) => ({
            ...prev,
            checkedAgreements: updatedCheckedState,
            isAgreementChecked: isAllChecked,
        }));

        onChange(isAllChecked);
    };

    return (
        <Box className={clsN(style['agreements-wrapper'])}>
            <Divider variant="middle" textAlign="center" className={clsN(style['agreements-wrapper__divider'])}>
                동의사항
            </Divider>
            <Box className={clsN(style['agreements-wrapper__checkbox-wrapper'])}>
                {checkboxTexts.map((text, index) => (
                    <CheckboxWithText
                        key={text}
                        onChange={(e) => handleCheckBox(e, index)}
                        value={validationState.checkedAgreements[index] || false}
                        className={clsN(style['agreements-wrapper__checkbox-wrapper__checkbox'])}
                        text={text}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default AgreementList;
