import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import CheckboxWithText from '@molecules/checkbox/checkboxWithText/CheckboxWithText';
import clsN from 'classnames';
import style from './style/style.module.scss';

const AgreementList = ({ onChange }: { onChange: (checked: boolean) => void }) => {
    const [checkBox, setCheckBox] = useState(false);
    const checkboxTexts = ['SNS 광고에 대한 동의', '기타 고객정보 영리적 사용에 대한 동의'];

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBox(e.target.checked);
        onChange(e.target.checked);
    };

    return (
        <Box className={clsN(style['agreements-wrapper'])}>
            <Divider variant="middle" textAlign="center" className={clsN(style['agreements-wrapper__divider'])}>
                동의사항
            </Divider>
            <Box className={clsN(style['agreements-wrapper__checkbox-wrapper'])}>
                {checkboxTexts.map((text) => (
                    <CheckboxWithText
                        onChange={handleCheckBox}
                        value={checkBox}
                        key={text}
                        className={clsN(style['agreements-wrapper__checkbox-wrapper__checkbox'])}
                        text={text}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default AgreementList;
