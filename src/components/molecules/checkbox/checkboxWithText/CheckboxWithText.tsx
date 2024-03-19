import React from 'react';
import Text from '@components/atoms/text/Text';
import { Box, Checkbox } from '@mui/material';
import clsN from 'classnames';
import style from './style/saveId.module.scss';

interface saveIdProps {
    className: string;
    text: string;
}

const CheckboxWithText = ({ className, text }: saveIdProps) => {
    return (
        <Box className={clsN(className, `${style['checkbox-container']}`)}>
            <Checkbox />
            <Text className={clsN(`${style['checkbox-container__text']}`)} text={text} />
        </Box>
    );
};

export default CheckboxWithText;
