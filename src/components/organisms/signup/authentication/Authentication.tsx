import React from 'react';
import { Box, TextField } from '@mui/material';
// import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';
import style from './style/style.module.scss';

const Authentication = () => {
    // const isInMobile = useDomSizeCheckHook(768);

    return (
        <div>
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
            </Box>
        </div>
    );
};

export default Authentication;
