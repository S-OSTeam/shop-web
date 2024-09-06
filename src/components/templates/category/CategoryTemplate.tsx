import React, { useEffect, useState } from 'react';
import { ItemCategoryTreeResponse } from '@interface/category/Category';
import { Box } from '@mui/material';
import { ItemInterface } from '@util/test/interface/Item';
import Popular from '@organisms/home/product/popular/Popular';
import Pagination from '@molecules/pagination/Pagination';
import CategoryTitle from '@organisms/category/title/CategoryTitle';
import clsN from 'classnames';
import styles from './styles/CategoryTemplate.module.scss';

interface CategoryTemplateProps {
    categoryTitle: string;
    categories: ItemCategoryTreeResponse[];
    items: ItemInterface[];
    onProductClick?: (item: ItemInterface) => void;
    onPainginationChange: (changePage: number) => void;
    onCategoryClick: (categoryId: string) => void;
    totalCount: number;
}

const CategoryTemplate = ({
    categoryTitle,
    categories,
    items,
    onProductClick,
    onPainginationChange,
    onCategoryClick,
    totalCount,
}: CategoryTemplateProps) => {
    const size: number = 10;
    const [page, setPage] = useState<number>(1);

    // page+1 값으로 변하면 index번호를 page관련 값을 이용해서 내용 바꿔주기
    const onPaginationHandle = (event: React.ChangeEvent<unknown>, value: number) => {
        if (event) setPage(value);
    };

    useEffect(() => {
        onPainginationChange(page);
    }, [page]);

    const onTotalPageHandle = () => {
        let pages = totalCount / size;
        if (totalCount % size > 0) pages += 1;

        return pages;
    };

    return (
        <Box className={clsN(styles['category-wrapper'])}>
            <CategoryTitle categoryTitle={categoryTitle} categories={categories} onCategoryClick={onCategoryClick} />
            <Popular popularItems={items} content="" onProductClick={onProductClick} />
            <Box>
                <Pagination
                    className={clsN(styles['category-wrapper__pagination'])}
                    count={onTotalPageHandle()}
                    page={page}
                    onChange={onPaginationHandle}
                />
            </Box>
        </Box>
    );
};

CategoryTemplate.defaultProps = {
    onProductClick: undefined,
};

export default CategoryTemplate;
