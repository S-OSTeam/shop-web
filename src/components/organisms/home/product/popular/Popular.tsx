import React from 'react';
import { Box } from '@mui/material';
import Text from '@atoms/text/Text';
import Card from '@molecules/card/Card';
import Title from '@molecules/title/Title';
import Chip from '@atoms/chip/Chip';
import clsN from 'classnames';
import { Item } from '@util/test/interface/Item';
import styles from './styles/Popular.module.scss';

interface PopularProps {
    popularItems: Item[];
    content: string;
}

const Popular = ({ popularItems, content }: PopularProps) => {
    return (
        <Box className={clsN(styles['popular-wrapper'])}>
            <Text className={clsN(styles['popular-wrapper__title'])} text={content} />
            <Box className={clsN(styles['popular-wrapper__items'])}>
                {popularItems.map((item) => (
                    <Card
                        className={clsN(styles['popular-wrapper__card'])}
                        imgClsN={clsN(styles['popular-wrapper__card-img'])}
                        contentClsN={clsN(styles['popular-wrapper__card-content'])}
                        imgPath={item.imageUrls[0]}
                    >
                        <Chip className={clsN(styles['popular-wrapper__tag'])} label="무료배송" />
                        <Title className={clsN(styles['popular-wrapper__content'])} content={item.title} />
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Popular;
