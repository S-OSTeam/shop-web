// eslint-disable

import React, { useState } from 'react';
import { Box, Divider, FormControl, Radio, RadioGroup } from '@mui/material';

// import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';
import style from './style/style.module.scss';

const Gender = () => {
    // const isInMobile = useDomSizeCheckHook(768);
    const [value, setValue] = useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Box className={clsN(`${style['gender-wrapper']}`)}>
                <Divider className={clsN(`${style['gender-wrapper__divider']}`)} variant="middle" textAlign="left">
                    성별
                </Divider>
                <FormControl className={clsN(`${style['gender-wrapper__form-control']}`)}>
                    <RadioGroup
                        defaultValue="남성"
                        value={value}
                        onChange={handleChange}
                        className={clsN(`${style['gender-wrapper__radio-group']}`)}
                    >
                        <Radio value="남성" aria-label="Male" />
                        남성
                        <Radio value="여성" aria-label="Female" />
                        여성
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    );
};

export default Gender;
