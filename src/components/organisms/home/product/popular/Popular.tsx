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
import { Item, ItemInterface } from '@util/test/interface/Item';
import styles from './styles/Popular.module.scss';

interface PopularProps {
    popularItems: Item[] | ItemInterface[];
    content: string;
    onProductClick?: (item: Item | ItemInterface) => void;
}

/**
 *
 * @param popularItems 아이템의 태그 받을거 포함(Tags로 string배열로 예상)
 * 인기상품 뿐만 아니라 신규상품 까지 같은 탬플릿을 사용해서 재활용 하였다.
 * @param content
 * @constructor
 */
const Popular = ({ popularItems, content, onProductClick }: PopularProps) => {
    const testTags: string[] = ['무료배송', '특가'];

    /**
     * 여러가지 받은 태그를 map형태로 리턴 해준다.
     */
    const tags = () => {
        return testTags.map((tag) => <Chip className={clsN(styles['popular-wrapper__tag'])} label={tag} />);
    };

    /**
     * @param price
     * price값을 받으면 한국식 화페 단위로 포멧을 변경 후에 TextGroup에 넘겨줄 string배열값을 리턴해준다.
     */
    const priceFormat = (price: string) => {
        const numericPrice = parseFloat(price);
        const priceStr: string[] = [];

        priceStr[0] = numericPrice.toLocaleString('ko-KR');
        priceStr[1] = '원';

        return priceStr;
    };

    /**
     * @param review
     * review값을 인자로 받아 ReactNode배열 타입의 변수인 reviewStr에 해당 평점을 포멧해주고서 해당 배열을 리턴해준다.
     */
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
                        onClick={() => onProductClick && onProductClick(item)}
                    >
                        {tags()}
                        <Box className={clsN(styles['popular-wrapper__popular-info'])}>
                            <Title className={clsN(styles['popular-wrapper__card-title'])} content={item.title} />
                            <Title className={clsN(styles['popular-wrapper__card-info'])} content={item.content} />
                        </Box>
                        <Box className={clsN(styles['popular-wrapper__popular-review'])}>
                            <TextGroup
                                className={clsN(styles['popular-wrapper__card-price'])}
                                textGroup={priceFormat(item.price.toString())}
                            />
                            <IconGroup
                                className={clsN(styles['popular-wrapper__card-review'])}
                                IconGroups={reviewFormat(item.reviewCnt)}
                            />
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

Popular.defaultProps = {
    onProductClick: undefined,
};

export default Popular;
