import React from 'react';
import Text, { TextProps } from '@components/atoms/text/Text';
import { Box } from '@mui/material';
import clsN from 'classnames';
import style from './style/dividerWithText.module.scss';

interface DividerWithTextProps extends TextProps {
    children: React.ReactNode;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ children, ...textProps }) => {
    return (
        <Box className={clsN(`${style['divider-container']}`)}>
            <Box className={clsN(`${style['divider-container__line']}`)} />
            {children && <Text {...textProps}>{children}</Text>}
            <Box className={clsN(`${style['divider-container__line']}`)} />
        </Box>
    );
};

export default DividerWithText;
