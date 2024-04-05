// eslint-disable

import React, { useState } from 'react';
import { Box, Divider, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';

import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';
import style from './style/style.module.scss';

const Gender = () => {
    const isInMobile = useDomSizeCheckHook(768);
    const [value, setValue] = useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div>
            {isInMobile ? (
                <Box className={clsN(`${style['gender-wrapper']}`)}>
                    <FormControl>
                        <FormLabel>
                            <Divider variant="middle" textAlign="left">
                                성별
                            </Divider>
                        </FormLabel>
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
            ) : (
                <Box>helloPC</Box>
            )}
        </div>
    );
};

export default Gender;
