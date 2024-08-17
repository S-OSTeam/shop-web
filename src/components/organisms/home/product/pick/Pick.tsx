import React from 'react';
import { Box } from '@mui/material';
import Text from '@atoms/text/Text';
import Masonry from '@molecules/masonry/Masonry';
import clsN from 'classnames';
import { itemResponse } from '@util/test/data/ItemResponse';
import { ItemInterface } from '@util/test/interface/Item';
import styles from './styles/Pick.module.scss';

interface PickProps {
    onClick: (item: ItemInterface) => void;
}

const Pick = ({ onClick }: PickProps) => {
    const testHeights: number[] = [419, 203, 203];
    const testImages: string[] = [
        `${itemResponse[11].imageUrls[0]}`,
        `${itemResponse[12].imageUrls[0]}`,
        `${itemResponse[13].imageUrls[0]}`,
    ];
    const testItems: ItemInterface[] = [itemResponse[11], itemResponse[12], itemResponse[13]];
    return (
        <Box className={clsN(styles['pick-wrapper'])}>
            <Text className={clsN(styles['pick-wrapper__title'])} text="Deamhome 엄선 작품" />
            <Box className={clsN(styles['pick-wrapper__items'])}>
                <Masonry
                    imgClsN={clsN(styles['pick-wrapper__img'])}
                    heights={testHeights}
                    columns={2}
                    spacing={2}
                    images={testImages}
                    items={testItems}
                    onClick={onClick}
                />
            </Box>
        </Box>
    );
};

export default Pick;
