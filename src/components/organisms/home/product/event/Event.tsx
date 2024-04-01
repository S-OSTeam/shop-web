import React from 'react';
import { Box } from '@mui/material';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/Event.module.scss';

const Event = () => {
    return (
        <Box className={clsN(styles['event-wrapper'])}>
            <Text className={clsN(styles['event-wrapper__title'])} text="진행중인 이벤트" />
            <div className={clsN(styles['event-wrapper__category-btn'])} />
        </Box>
    );
};

export default Event;
