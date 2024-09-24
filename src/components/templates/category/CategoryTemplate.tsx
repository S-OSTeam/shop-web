import React from 'react';
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
    onPainginationChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    onCategoryClick: (categoryId: string) => void;
    totalCount: number;
    page: number;
}

const CategoryTemplate = ({
    categoryTitle,
    categories,
    items,
    onProductClick,
    onPainginationChange,
    onCategoryClick,
    totalCount,
    page,
}: CategoryTemplateProps) => {
    const size: number = 10; // 한 페이지에 보여줄 아이템 수

    // 페이지 수 계산: 올림을 사용해 정확한 페이지 수 계산
    const onTotalPageHandle = () => {
        return Math.ceil(totalCount / size);
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
                    onChange={onPainginationChange}
                />
            </Box>
        </Box>
    );
};

CategoryTemplate.defaultProps = {
    onProductClick: undefined,
};

export default CategoryTemplate;
