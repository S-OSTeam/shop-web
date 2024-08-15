import React, { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import { Path } from '@util/Path';
import { ItemInterface } from '@util/test/interface/Item';
import { EmptyCategoryTreeResponse, ItemCategoryTreeResponse, ItemSearchRequest } from '@interface/category/Category';
import { CATEGORY_TREE } from '@api/apollo/gql/queries/ItemCategoryTreeResponseQuery.gql';
import CategoryTemplate from '@templates/category/CategoryTemplate';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const categoryId = location.state.categoryId || {}; // 카테고리에 있는 item 정보를 조회하고 itemList에 데이터 상태를 관리한다.
    const [itemList, setItemList] = useState<ItemInterface[]>();
    // category 정보를 조회하고 categories에 데이터를 상태를 관리한다.
    const [categories, setCategories] = useState<ItemCategoryTreeResponse[]>(EmptyCategoryTreeResponse);
    // pagination 처리를 위한 pageItem으로 pageSize와 pageNumber 변경 예정
    const [pageItem, setPageItem] = useState<ItemSearchRequest>({
        categoryPublicId: `${categoryId}`,
        pageSize: '10',
        pageNumber: '1',
    });

    // useGraphQL 커스텀 훅을 이용해서 item을 조회
    const { data: itemData, refetch: itemRefetch } = useGraphQL({
        query: SEARCH_ITEM,
        type: 'query',
        request: { ...pageItem },
    });

    // useGraphQL 커스텀 훅을 이용해서 categoryId를 필터링하여 카테고리 목록을 조회
    const { data: categoryData, refetch: categoryRefetch } = useGraphQL({
        query: CATEGORY_TREE,
        type: 'query',
        request: categoryId,
    });

    useMemo(() => {
        if (categoryId) {
            setPageItem((prevPageItem) => ({
                ...prevPageItem,
                categoryPublicId: `${categoryId}`,
            }));
            itemRefetch();
        }
    }, [categoryId, itemRefetch]);

    useMemo(() => {
        if (itemData) {
            setItemList(itemData.searchItem);
        }
    }, [itemData]);

    useMemo(() => {
        categoryRefetch();
    }, [categoryRefetch]);

    useMemo(() => {
        if (categoryData) {
            setCategories(categoryData.findSubCategoriesTree.children);
        }
    }, [categoryData]);

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
            {itemList && <CategoryTemplate categories={categories} items={itemList} onProductClick={onProductHandle} />}
        </Box>
    );
};

export default CategoryPage;
