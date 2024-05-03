import React, { useEffect, useState } from 'react';
import HomeTemplate from '@templates/home/HomeTemplate';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import { ItemInterface } from '@util/test/interface/Item';

const DeamHomePage = () => {
    const itemSearch = {
        categoryPublicId: '01HWW3N8GVJE3QDBQTQHHYNNJX',
        pageSize: '1',
        pageNumber: '1',
    };

    const [itemList, setItemList] = useState<ItemInterface>();

    const { data, refetch } = useGraphQL({ query: SEARCH_ITEM, type: 'query', request: itemSearch });

    useEffect(() => {
        if (data) {
            setItemList(data.searchItem);
            console.log(data);
            console.log(refetch);
            console.log(itemList);
        }
    }, [data]);

    return <HomeTemplate />;
};

export default DeamHomePage;
