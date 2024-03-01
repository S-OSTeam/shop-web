import React from 'react';
import { Box } from '@mui/material';
import { Item } from '@util/test/interface/Item';
import clsN from 'classnames';
import Text from '@atoms/text/Text';
import styles from './styles/Recommand.module.scss';

interface RecommendProps {
    recommendItem: Item[];
}

const Recommend = ({ recommendItem }: RecommendProps) => {
    return (
        <Box className={clsN(styles['recommend-wrapper'])}>
            <Text className={clsN(styles['recommend-wrapper__title'])} text="추천 카테고리" />
            {recommendItem.map((item) => (
                <Box className={clsN(styles['recommend-wrapper__category-btn'])}>{item.title}</Box>
            ))}
        </Box>
    );
};

export default Recommend;
