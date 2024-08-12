import React from 'react';
import HomeTemplate from '@templates/home/HomeTemplate';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import { Item, ItemInterface } from '@util/test/interface/Item';
import { useNavigate } from 'react-router-dom';
import { EventInfo } from '@util/test/interface/Event';

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
            const idEncode = encodeURIComponent(item.id);
            navigation(`/shop/event?id=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        } else {
            navigation(`/shop/product?publicId=${item.publicId}`, {
                state: {
                    productItem: item,
                },
            });
        }
    };

    const onRecommendHandle = (item: Item | ItemInterface | EventInfo) => {
        if ('id' in item) {
            navigation(`/shop/event?id=${item.id}`, {
                state: {
                    productItem: item,
                },
            });
        } else {
            navigation(`/shop/category?categoryId=${item.publicId}`, {
                state: {
                    productItem: item,
                },
            });
        }
    };

    const onEventHandle = (item: Item | ItemInterface | EventInfo) => {
        if ('id' in item) {
            const idEncode = encodeURIComponent(item.id);
            navigation(`/shop/event?id=${idEncode}`, {
                state: {
                    productItem: item,
                },
            });
        } else {
            navigation(`/shop/product?publicId=${item.publicId}`, {
                state: {
                    productItem: item,
                },
            });
        }
    };

    const onPickHandle = (item: Item | ItemInterface) => {
        navigation(`/shop/product?publicId=${item.publicId}`, {
            state: {
                productItem: item,
            },
        });
    };

    const onProductHandle = (item: Item | ItemInterface) => {
        navigation(`/shop/product?publicId=${item.publicId}`, {
            state: {
                productItem: item,
            },
        });
    };

    const onReviewHandle = (id: string) => {
        console.log(id);
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
