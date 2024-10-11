import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { EmptyCategoryTreeResponse, ItemCategoryTreeResponse, ItemSearchRequest } from '@interface/category/Category';
import categoriesAtom from '@recoil/atoms/category/categoriesAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import categoryIdAtom from '@recoil/atoms/category/categoryIdAtom';
import { useNavigate } from 'react-router-dom';
import { ItemInterface } from '@util/test/interface/Item';
import { Path } from '@util/Path';
import useGraphQL from '@hooks/useGraphQL';
import { SEARCH_ITEM } from '@api/apollo/gql/queries/ItemResponseQuery.gql';
import CategoryTemplate from '@templates/category/CategoryTemplate';

const CategoryPage = () => {
    const navigation = useNavigate();

    const [categoryId, setCategoryId] = useRecoilState(categoryIdAtom);
    const totalCategories = useRecoilValue(categoriesAtom);
    // 카테고리 타이틀의 상태를 관리하는 state
    const [title, setTitle] = useState<string>('');
    // 카테고리의 상태를 관리하는 state
    const [categories, setCategories] = useState<ItemCategoryTreeResponse[]>(EmptyCategoryTreeResponse);
    // 해당 카테고리의 목록 아이템의 상태를 관리하는 state
    const [itemList, setItemList] = useState<ItemInterface[]>();
    // 해당 카테고리의 목록 아이템의 총 갯수 상태를 관리하는 state
    const [totalCount, setTotalCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);

    // pagination 처리를 위한 pageItem으로 pageSize와 pageNumber 변경 예정
    const [pageItem, setPageItem] = useState<ItemSearchRequest>({
        categoryPublicId: `${categoryId}`,
        pageSize: '10',
        pageNumber: `${page}`,
    });

    // useGraphQL 커스텀 훅을 이용해서 item을 조회
    const { data: itemData, refetch: itemRefetch } = useGraphQL({
        query: SEARCH_ITEM,
        type: 'query',
        request: { ...pageItem },
    });

    // useCallback으로 filter라는 변수로 메모라이즈 시켜놓는다.
    const filter = useCallback(() => {
        // 선택한 카테고리의 부모 카테고리를 찾는다.
        const parentCategory = findParentCategory(totalCategories, categoryId);
        if (parentCategory) {
            // 부모 카테고리를 상태에 저장한다.
            setCategories(parentCategory);
        }
    }, [categoryId, totalCategories]);

    /* findParentCategory로 filter와 연결되어 useCallback함수로 filter 함수의 값을 메모라이징 하여 filter의 값 즉, categoryId값이 변경이 되면 함수가 호출 되게끔 설계하였다.
     * categories와 targetPublicId을 받아와 자식 카테고리가 없을 때는 부모 카테고리의 영향을 받는 필터링 함수를 만들었다. */
    const findParentCategory = useCallback(
        (categories: ItemCategoryTreeResponse[], targetPublicId: string): ItemCategoryTreeResponse[] | undefined => {
            for (const category of categories) {
                if (category.publicId === targetPublicId) {
                    setTitle(category.title);
                    // 자식 카테고리가 있으면 자식 카테고리 리턴한다.
                    if (category.children && category.children.length > 0) {
                        return category.children;
                    }
                    // 자식 카테고리가 없으면 부모 카테고리 리턴한다.
                    return categories;
                }

                // 자식 카테고리들을 재귀적으로 탐색한다.
                if (category.children && category.children.length > 0) {
                    const result = findParentCategory(category.children, targetPublicId);
                    if (result) {
                        return result;
                    }
                }
            }
            return undefined; // 카테고리를 찾지 못한 경우 undefined 리턴한다.
        },
        [filter],
    );

    // filter 값이 변경 되면 객체화 된 filter 함수를 호출한다.
    useEffect(() => {
        filter();
    }, [filter]);

    /* categoryId가 값이 업데이트 되면 gql폴더에 있는 SEARCH_ITEM 쿼리 문을 커스텀 훅인 useGraphQL로 실행을 시켜서 item을 재조회 하도록 itemRefetch를 실행 시킨다.
     * 카테고리가 바뀌게 될 때마다 page의 넘버를 1로 바꿔주면서 page를 초기화 시켜준다. */
    useEffect(() => {
        if (categoryId) {
            setPageItem((prevPageItem) => ({
                ...prevPageItem,
                categoryPublicId: `${categoryId}`,
                pageNumber: '1',
            }));
            itemRefetch();
        }
    }, [categoryId]);

    /* gql로 Item 목록을 새로 조회할 때 마다 itemData에 값을 입력받고 itemData에 값이 존재한다면 searchItem.items에 값에 있는 아이템들을 itemList에 저장하고,
     * searchItem.totalCount 값에 있는 데이터 값을 totalItemCnt에 저장한다. */
    useEffect(() => {
        if (itemData) {
            setItemList(itemData.searchItem.items);
            setTotalCount(itemData.searchItem.totalCount);
        }
    }, [itemData]);

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

    // 페이지네이션 처리
    const handlePaginationChange = useCallback(
        (event: React.ChangeEvent<unknown>, value: number) => {
            if (event) setPage(value);
        },
        [page],
    );

    useEffect(() => {
        setPageItem((prev) => ({
            ...prev,
            pageNumber: page.toString(),
        }));
        itemRefetch();
    }, [handlePaginationChange]);

    // categoryId 상태를 변경한다.
    const onCategoryHandle = useCallback(
        (changeId: string) => {
            setCategoryId(changeId);
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
                    onPainginationChange={handlePaginationChange}
                    onCategoryClick={onCategoryHandle}
                    totalCount={totalCount}
                    page={page}
                />
            )}
        </Box>
    );
};

export default CategoryPage;