import React from 'react';
import { Box } from '@mui/material';
import Text from '@atoms/text/Text';
import Card from '@molecules/card/Card';
import Title from '@molecules/text/title/Title';
import Chip from '@atoms/chip/Chip';
import clsN from 'classnames';
import TextGroup from '@molecules/text/textGroup/TextGroup';
import IconGroup from '@molecules/icon/IconGroup';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Item } from '@util/test/interface/Item';
import styles from './styles/Popular.module.scss';

interface PopularProps {
    popularItems: Item[];
    content: string;
}

/**
 *
 * @param popularItems 아이템의 태그 받을거 포함(Tags로 string배열로 예상)
 * @param content
 * @constructor
 */
const Popular = ({ popularItems, content }: PopularProps) => {
    const testTags: string[] = ['무료배송', '특가'];
    const tags = () => {
        return testTags.map((tag) => <Chip className={clsN(styles['popular-wrapper__tag'])} label={tag} />);
    };

    const priceFormat = (price: string) => {
        const numericPrice = parseFloat(price);
        const priceStr: string[] = [];

        priceStr[0] = numericPrice.toLocaleString('ko-KR');
        priceStr[1] = '원';

        return priceStr;
    };

    const reviewFormat = (review: number) => {
        const reviewStr: React.ReactNode[] = [];

        // eslint-disable-next-line no-plusplus
        for (let idx = 1; idx <= 5; idx++) {
            if (review - idx >= 0) reviewStr[idx - 1] = <StarIcon fontSize="inherit" />;
            else if (review - idx >= -0.5) reviewStr[idx - 1] = <StarHalfIcon fontSize="inherit" />;
            else reviewStr[idx - 1] = <StarBorderIcon fontSize="inherit" />;
        }
        return reviewStr;
    };

    return (
        <Box className={clsN(styles['popular-wrapper'])}>
            <Text className={clsN(styles['popular-wrapper__title'])} text={content} />
            <Box className={clsN(styles['popular-wrapper__items'])}>
                {popularItems.map((item) => (
                    <Card
                        className={clsN(styles['popular-wrapper__card'])}
                        imgClsN={clsN(styles['popular-wrapper__card-media'])}
                        contentClsN={clsN(styles['popular-wrapper__card-content'])}
                        imgPath={item.imageUrls[0]}
                    >
                        {tags()}
                        <Title className={clsN(styles['popular-wrapper__card-title'])} content={item.title} />
                        <Title className={clsN(styles['popular-wrapper__card-info'])} content={item.content} />
                        <TextGroup
                            className={clsN(styles['popular-wrapper__card-price'])}
                            textGroup={priceFormat(item.price.toString())}
                        />
                        <IconGroup
                            className={clsN(styles['popular-wrapper__card-review'])}
                            IconGroups={reviewFormat(item.reviewCnt)}
                        />
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Popular;
