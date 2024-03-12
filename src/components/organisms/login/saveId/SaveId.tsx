import React from 'react';
import Text from '@components/atoms/text/Text';
import { Box, Checkbox } from '@mui/material';
import clsN from 'classnames';
import style from './style/saveId.module.scss';

interface saveIdProps {
    className: string;
}

const SaveId = ({ className }: saveIdProps) => {
    return (
        <Box className={clsN(className, `${style['save-id']}`)}>
            <Checkbox />
            <Text className={clsN(`${style['save-id__text']}`)} text="아이디 저장" />
        </Box>
    );
};

export default SaveId;
