import React from 'react';
import Text from '@components/atoms/text/Text';
import { Box, Checkbox } from '@mui/material';
import clsN from 'classnames';
import style from './style/checkboxWithText.module.scss';

interface checkboxWithTextProps {
    className: string;
    text: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void; // Properly typed onChange handler
    value: boolean;
}

const CheckboxWithText = ({ className, text, onChange, value }: checkboxWithTextProps) => {
    return (
        <Box className={clsN(className, `${style['checkbox-container']}`)}>
            <Checkbox onChange={onChange} value={value} />
            <Text className={clsN(`${style['checkbox-container__text']}`)} text={text} />
        </Box>
    );
};

export default CheckboxWithText;
