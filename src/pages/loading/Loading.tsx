import React from 'react';
import { Box } from '@mui/material';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/Loading.module.scss';

const Loading = () => {
    return (
        <Box className={clsN(styles.background)}>
            <Text className={clsN(styles['loading-text'])} text="로딩 중 입니다." />
        </Box>
    );
};

export default Loading;
