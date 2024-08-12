import React from 'react';
import { Box } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import Popular from '@organisms/home/product/popular/Popular';
import { Item, ItemInterface } from '@util/test/interface/Item';

const CategoryPage = () => {
    const navigation = useNavigate();
    const [searchPararm] = useSearchParams();
    const categoryId = searchPararm.get('categoryId');
    const [itemList, setItemList] = React.useState<ItemInterface[]>();

    const { data: itemData, refetch: itemRefetch } = useGraphQL({
        query: SEARCH_ITEM,
        type: 'query',
        request: {
            categoryPublicId: `${categoryId}`,
            pageSize: '15',
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

    const onProductHandle = (item: Item | ItemInterface) => {
        console.log(item.publicId.toString());
        navigation(`/shop/product?publicId=${item.publicId.toString()}`, {
            state: {
                productItem: item,
            },
        });
    };

    return (
        <Box>
            <h1 style={{ marginTop: 80, marginBottom: 300 }}>{categoryId}</h1>
            {itemList && <Popular popularItems={itemList} content="신규 상품" onProductClick={onProductHandle} />}
        </Box>
    );
};

export default CategoryPage;
