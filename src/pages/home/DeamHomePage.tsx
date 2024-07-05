import React, { useEffect, useState } from 'react';
import HomeTemplate from '@templates/home/HomeTemplate';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import { ItemInterface } from '@util/test/interface/Item';

const DeamHomePage = () => {
    const [itemList, setItemList] = useState<ItemInterface[]>();

    const { data: itemData, refetch: itemRefetch } = useGraphQL({
        query: SEARCH_ITEM,
        type: 'query',
        request: {
            categoryPublicId: '01HX6NCX81BHPZ0Y5ARTFQ6HRS',
            pageSize: '10',
            pageNumber: '1',
        },
    });

    useEffect(() => {
        itemRefetch().then();
        if (itemData) {
            setItemList(itemData.searchItem);
            console.log(itemList);
        }
    }, [itemData]);

    return <HomeTemplate />;
};

export default DeamHomePage;
