import React, { useState } from 'react';
import { FormControl, FormGroup } from '@mui/material';
import CheckBoxEle from '../../../molecules/FAQ_0_1/check/CheckBox';
import FormLabel from '../../../molecules/formLabel/FormLabel';
import Text from '../../../atoms/text/Text';

export const OrgFormGroup = () => {
    const [checkState, setCheckState] = useState({
        checked_sns: false,
        checked_mail: false,
        checked_anon: false,
    });

    const handleCheckEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckState({
            ...checkState,
            [e.target.name]: e.target.checked,
        });
    };
    const { checked_sns, checked_mail, checked_anon } = checkState;

    return (

        <FormControl className='faq-form-check'>
            <FormLabel>
                <Text text='문의답변 안내' />
            </FormLabel>
            <FormGroup
                className='faq-group-check'
            >
                <CheckBoxEle
                    checked={checked_sns}
                    name='checked-sns'
                    label='SNS 답변 알림받기'
                    onChange={handleCheckEvent}
                />
                <CheckBoxEle
                    checked={checked_mail}
                    name='checked-mail'
                    label='메일 답변 알림받기'
                    onChange={handleCheckEvent}
                />
                <CheckBoxEle
                    checked={checked_anon}
                    name='checked-anon'
                    label='익명으로 문의하기'
                    onChange={handleCheckEvent}
                />
            </FormGroup>
        </FormControl>
    );
};