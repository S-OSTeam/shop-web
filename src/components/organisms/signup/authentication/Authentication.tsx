import React from 'react';
import { Box, Divider, TextField } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';
import style from './style/style.module.scss';

const Authentication = () => {
    const isInMobile = useDomSizeCheckHook(768);

    return (
        <div>
            {isInMobile ? (
                <Box className={clsN(`${style['authentication-wrapper']}`)}>
                    <TextField
                        label="성 함"
                        className={clsN(`${style['authentication-wrapper__name']}`)}
                        id="outlined-required"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="홍 길 동"
                    />
                    <TextField
                        label="생년월일"
                        className={clsN(`${style['authentication-wrapper__birth']}`)}
                        id="outlined-required"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="1900.00.00"
                    />
                    <Divider variant="middle" textAlign="center">
                        {/* <RadioGroup defaultValue="outlined" name="radio-buttons-group">
                            <Radio value="outlined" />
                            
                            남자
                            <Radio value="outlined" />
                        </RadioGroup> */}
                    </Divider>
                </Box>
            ) : (
                <Box>hello</Box>
            )}
        </div>
    );
};

export default Authentication;