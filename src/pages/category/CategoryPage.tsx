import React from 'react';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import Popular from '@organisms/home/product/popular/Popular';
import { ItemInterface } from '@util/test/interface/Item';
import { Path } from '@util/Path';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const categoryId = location.state.categoryId || {};
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
        }
    }, [itemData]);

    const onProductHandle = (item: ItemInterface) => {
        const encodedPublicId = btoa(item.publicId.toString()).slice(0, -1);
        navigation(`${Path.product}?publicId=${encodedPublicId}`, {
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
