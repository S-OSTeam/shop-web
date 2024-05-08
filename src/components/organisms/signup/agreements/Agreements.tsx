import React from 'react';
import { Box, Divider } from '@mui/material';
// import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import clsN from 'classnames';

import style from './style/style.module.scss';

const Agreements = () => {
    // const isInMobile = useDomSizeCheckHook(768);

    return (
        <div>
            <Box className={clsN(style['agreements-wrapper'])}>
                <Divider variant="middle" textAlign="center" className={clsN(style['agreements-wrapper__divider'])}>
                    동의사항
                </Divider>
                <Box className={clsN(style['agreements-wrapper__checkbox-wrapper'])}></Box>
            </Box>
        </div>
    );
};

export default Agreements;
