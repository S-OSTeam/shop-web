import { useEffect, useState } from 'react';
import useGraphQL from '@hooks/useGraphQL';
import { FIND_ITEM_CATEGORY_BY_PUBLICID } from '@api/apollo/gql/queries/ItemCategoryTreeResponseQuery.gql';

export interface useCategories {
    title: string[];
}

export const useEmptyCategories: useCategories = {
    title: [''],
};

const useCategory = (publicId: string) => {
    const [curPublicId, setCurPublicId] = useState(publicId);
    const [categories, setCategories] = useState(useEmptyCategories);
    const [isComplete, setIsComplete] = useState(false);

    const { data, refetch } = useGraphQL({
        query: FIND_ITEM_CATEGORY_BY_PUBLICID,
        type: 'query',
        request: curPublicId,
    });

    // 초기 publicId가 변경되면 리셋
    useEffect(() => {
        if (publicId && publicId !== curPublicId) {
            setCurPublicId(publicId);
            setCategories(useEmptyCategories);
            setIsComplete(false);
        }
    }, [publicId]);

    // curPublicId가 변경될 때마다 refetch (publicId가 유효할 때만)
    useEffect(() => {
        console.log(isComplete);
        if (curPublicId && !isComplete) {
            refetch();
        }
    }, [curPublicId, isComplete]);

    useEffect(() => {
        if (data) {
            if (data.findItemCategoryByPublicId.parentPublicId !== data.findItemCategoryByPublicId.publicId) {
                setCurPublicId(data.findItemCategoryByPublicId.parentPublicId);
                setCategories((prev) => {
                    // 현재 title 배열에서 빈 문자열 제거 후 새 항목 추가
                    const filteredTitles = prev.title.filter((title) => title !== '');
                    return {
                        title: [...filteredTitles, data.findItemCategoryByPublicId.title],
                    };
                });
                setIsComplete(false);
            } else {
                setCategories((prev) => {
                    // 현재 title 배열에서 빈 문자열 제거 후 새 항목 추가
                    const filteredTitles = prev.title.filter((title) => title !== '');
                    return {
                        title: [...filteredTitles, data.findItemCategoryByPublicId.title],
                    };
                });
                // 더 이상 부모가 없으면 완료
                setIsComplete(true);
            }
        }
    }, [data]);

    return {
        categories,
        fetchCategoriesById: (id: string) => {
            setCurPublicId(id);
            setCategories(useEmptyCategories);
            setIsComplete(false);
        },
    };
};

export default useCategory;
