import React from 'react';
import { Box } from '@mui/material';
import { Review } from '@util/test/interface/Review';
import Text from '@atoms/text/Text';
import Card from '@molecules/card/Card';
import Title from '@molecules/text/title/Title';
import Button from '@atoms/button/Button';
import clsN from 'classnames';
import styles from './styles/ReviewList.module.scss';

interface ReviewListProps {
    reviewItems: Review[];
}

const ReviewList = ({ reviewItems }: ReviewListProps) => {
    return (
        <Box className={clsN(styles['review-wrapper'])}>
            <Text className={clsN(styles['review-wrapper__title'])} text="최근 상품 리뷰" />
            <Box className={clsN(styles['review-wrapper__items'])}>
                {reviewItems.map((review) => (
                    <Card
                        imgPath={review.imageUrls[0]}
                        className={clsN(styles['review-wrapper__card'])}
                        imgClsN={clsN(styles['review-wrapper__card-media'])}
                        contentClsN={clsN(styles['review-wrapper__card-content'])}
                    >
                        <Box className={clsN(styles['review-wrapper__review-info'])}>
                            <Title className={clsN(styles['review-wrapper__card-title'])} content={review.title} />
                            <Text className={clsN(styles['review-wrapper__card-info'])} text={review.content} />
                        </Box>
                        <Button className={clsN(styles['review-wrapper__review-detail'])}>
                            <Title
                                className={clsN(styles['review-wrapper__review-title'])}
                                content="[카테고리] 해당 상품명"
                            />
                            <Text className={clsN(styles['review-wrapper__review-move'])} text="해당 상품 바로가기" />
                        </Button>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default ReviewList;
