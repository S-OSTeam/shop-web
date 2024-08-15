import React from 'react';
import HomeTemplate from '@templates/home/HomeTemplate';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import { Item, ItemInterface } from '@util/test/interface/Item';
import { useNavigate } from 'react-router-dom';
import { EventInfo } from '@util/test/interface/Event';
import { ReviewResponse } from '@interface/review/Review';

const DeamHomePage = () => {
    const [itemList, setItemList] = React.useState<ItemInterface[]>();
    const navigation = useNavigate();

    const { data: itemData, refetch: itemRefetch } = useGraphQL({
        query: SEARCH_ITEM,
        type: 'query',
        request: {
            categoryPublicId: '01HX6NCX81BHPZ0Y5ARTFQ6HRS',
            pageSize: '10',
            pageNumber: '1',
        },
    });

    React.useEffect(() => {
        itemRefetch().then();
        if (itemData) {
            setItemList(itemData.searchItem);
            console.log(itemList);
        }
    }, [itemData]);

    const onHomeSwiperHandle = (item: Item | ItemInterface | EventInfo) => {
        if ('id' in item) {
            const idEncode = btoa(item.id.toString()).slice(0, -1);
            navigation(`/shop/event?id=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        } else {
            const idEncode = btoa(item.publicId.toString()).slice(0, -1);
            navigation(`/shop/product?publicId=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        }
    };

    const onRecommendHandle = (item: Item | ItemInterface | EventInfo) => {
        if ('id' in item) {
            const idEncode = btoa(item.id.toString()).slice(0, -1);
            navigation(`/shop/event?id=${idEncode}`, {
                state: {
                    categoryId: item.id.toString(),
                },
            });
        } else {
            const idEncode = btoa(item.publicId.toString()).slice(0, -1);
            navigation(`/shop/category?categoryId=${idEncode}`, {
                state: {
                    categoryId: item.publicId.toString(),
                },
            });
        }
    };

    const onEventHandle = (item: Item | ItemInterface | EventInfo) => {
        if ('id' in item) {
            const idEncode = btoa(item.id.toString()).slice(0, -1);
            navigation(`/shop/event?id=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        } else {
            const idEncode = btoa(item.publicId.toString()).slice(0, -1);
            navigation(`/shop/product?publicId=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        }
    };

    const onPickHandle = (item: Item | ItemInterface) => {
        const encodedPublicId = btoa(item.publicId.toString()).slice(0, -1);
        navigation(`/shop/product?publicId=${encodedPublicId}`, {
            state: {
                productItem: item,
            },
        });
    };

    const onProductHandle = (item: Item | ItemInterface) => {
        const encodedPublicId = btoa(item.publicId.toString()).slice(0, -1);
        navigation(`/shop/product?publicId=${encodedPublicId}`, {
            state: {
                productItem: item,
            },
        });
    };

    const onReviewHandle = (review: ReviewResponse) => {
        const encodeReviewId = btoa(review.reviewId.toString()).slice(0, -1);
        navigation(`/review?reviewId=${encodeReviewId}`, {
            state: {
                userReview: review,
            },
        });
    };

    return (
        <HomeTemplate
            onHomeSwiperClick={onHomeSwiperHandle}
            onRecommendClick={onRecommendHandle}
            onEventClick={onEventHandle}
            onPickClick={onPickHandle}
            onProductClick={onProductHandle}
            onReviewClick={onReviewHandle}
        />
    );
};

export default DeamHomePage;
