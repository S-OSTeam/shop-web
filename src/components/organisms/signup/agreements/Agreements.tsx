import React from 'react';
import { Box, Divider } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';
import CheckboxWithText from '@components/molecules/checkbox/checkboxWithText/CheckboxWithText';
import style from './style/style.module.scss';

const Agreements = () => {
    const isInMobile = useDomSizeCheckHook(768);

    return (
        <div>
            {isInMobile ? (
                <Box className={clsN(`${style['agreements-wrapper']}`)}>
                    <Divider variant="middle" textAlign="center">
                        동의사항
                    </Divider>
                    <Box className={clsN(`${style['agreements-wrapper__checkbox-wrapper']}`)}>
                        <CheckboxWithText
                            className={clsN(`${style['agreements-wrapper__checkbox-wrapper__checkbox']}`)}
                            text="선택적 SNS 광고 동의 여부"
                        />
                        <CheckboxWithText
                            className={clsN(`${style['agreements-wrapper__checkbox-wrapper__checkbox']}`)}
                            text="기타 고객정보 영리적 사용 등"
                        />
                        <CheckboxWithText
                            className={clsN(`${style['agreements-wrapper__checkbox-wrapper__checkbox']}`)}
                            text="기타 등등"
                        />
                    </Box>
                </Box>
            ) : (
                <Box>hello</Box>
            )}
        </div>
    );
};

export default Agreements;
