import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import { Path } from '@util/Path';
import { ItemInterface } from '@util/test/interface/Item';
import { EmptyCategoryTreeResponse, ItemCategoryTreeResponse, ItemSearchRequest } from '@interface/category/Category';
import { CATEGORY_TREE, PARENT_CATEGORY } from '@api/apollo/gql/queries/ItemCategoryTreeResponseQuery.gql';
import CategoryTemplate from '@templates/category/CategoryTemplate';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const [categoryId, setCategoryId] = useState<string>(location.state.categoryId || {});
    // 카테고리에 있는 item 정보를 조회하고 itemList에 데이터 상태를 관리한다.
    const [itemList, setItemList] = useState<ItemInterface[]>();
    // category 정보를 조회하고 categories에 데이터를 상태를 관리한다.
    const [categories, setCategories] = useState<ItemCategoryTreeResponse[]>(EmptyCategoryTreeResponse);
    // 선택 카테고리 타이틀 상태를 관리한다.
    const [title, setTitle] = useState<string>('');
    // 메인 카테고리 id 상태를 관리 한다.
    const [currentCategoryId, setCurrentCategoryId] = useState<string>(categoryId);
    const [totalCount, setTotalCount] = useState<number>(0);

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

    // useGraphQL 커스텀 훅을 이용해서 currentCategoryId를 필터링하여 카테고리 목록을 조회
    const { data: categoryData, refetch: categoryRefetch } = useGraphQL({
        query: CATEGORY_TREE,
        type: 'query',
        request: currentCategoryId,
    });

    // useGraphQL 커스텀 훅을 이용해서 currentCategoryId를 필터링하여 부모publicId를 조회
    const { data: parentData, refetch: parentRefetch } = useGraphQL({
        query: PARENT_CATEGORY,
        type: 'query',
        request: currentCategoryId,
    });

    useEffect(() => {
        setCategoryId(location.state.categoryId || {});
    }, [location]);

    /* categoryId가 업데이트 되면 gql폴더에 있는 SEARCH_ITEM 쿼리 문을 커스텀 훅인 useGraphQL로 실행을 시켜서 item을 재조회 하도록 itemRefetch를 실행 시킨다.
     * useMemo를 이용한 이유는 메모제이션 기법으로 기존의 categoryId를 기억하게 하여서 페이지네이션 될 때 마다 리 렌더링이 되는 것이 아닌 카테고리가 바뀔 때 리 렌더링 목적으로 사용하였다 */
    useMemo(() => {
        setCurrentCategoryId(categoryId);
        if (categoryId) {
            setPageItem((prevPageItem) => ({
                ...prevPageItem,
                categoryPublicId: `${categoryId}`,
                pageNumber: '1',
            }));
            itemRefetch();
        }
    }, [categoryId]);

    /* useEffect로 사용해도 무관하다 하지만 일관성 때문에 현재 페이지에서는 useMemo로 사용하였다. */
    useMemo(() => {
        if (itemData) {
            setItemList(itemData.searchItem.items);
            setTotalCount(itemData.searchItem.totalCount);
        }
    }, [itemData]);

    // 카테고리 목록을 갱신
    useMemo(() => {
        categoryRefetch();
    }, [categoryRefetch]);

    /* cateogryData와 parentRefetch를 의존성 배열에 추가하여 category 타이틀 들이 바뀔 떄마다 갱신해주고 만약 자식 타이틀이 없으면
     * 부모publicId를 조회하는 GraphQL 로직을 refetch하여 부모 카테고리 타이틀들을 조회하도록 하였다. */
    useMemo(() => {
        if (categoryData) {
            const children = categoryData.findSubItemCategoriesTree?.children ?? [];
            if (children.length === 0) {
                parentRefetch();
            } else {
                setCategories(children);
            }
        }
    }, [categoryData, parentRefetch]);

    useMemo(() => {
        if (categories) {
            const matchingCategory = categories.find(
                (category: ItemCategoryTreeResponse) => category.publicId.toString() === categoryId.toString(),
            );
            if (matchingCategory) setTitle(matchingCategory.title);
        }
    }, [categories, categoryId]);

    // 부모 카테고리의 ID로 currentCategoryId를 갱신
    useMemo(() => {
        if (parentData) {
            const parent = parentData.findItemCategoryByPublicId.parentPublicId ?? '';
            if (parent !== '' && parent !== currentCategoryId) {
                setCurrentCategoryId(parent);
            }
        }
    }, [parentData]);

    // useCallback으로 최적화하기
    const onProductHandle = useCallback(
        (item: ItemInterface) => {
            const encodedPublicId = btoa(item.publicId.toString()).slice(0, -1);
            navigation(`${Path.product}?publicId=${encodedPublicId}`, {
                state: { productItem: item },
            });
        },
        [navigation],
    );

    const onPaginationHandle = useCallback(
        (changePage: number) => {
            setPageItem((prevPageItem) => ({
                ...prevPageItem,
                pageNumber: changePage.toString(),
            }));
            itemRefetch();
        },
        [itemRefetch],
    );

    const onCategoryHandle = useCallback(
        (changeId: string) => {
            setCategoryId(changeId); // categoryId 상태를 변경합니다.
        },
        [categoryId],
    );

    return (
        <Box>
            {itemList && (
                <CategoryTemplate
                    categoryTitle={title}
                    categories={categories}
                    items={itemList}
                    onProductClick={onProductHandle}
                    onPainginationChange={onPaginationHandle}
                    onCategoryClick={onCategoryHandle}
                    totalCount={totalCount}
                />
            )}
        </Box>
    );
};

export default CategoryPage;
