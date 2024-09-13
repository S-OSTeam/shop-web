import React from 'react';
import { Box } from '@mui/material';
import { ItemCategoryTreeResponse } from '@interface/category/Category';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/CategoryTitle.module.scss';

interface CategoryTitleProps {
    categoryTitle: string;
    categories: ItemCategoryTreeResponse[];
    onCategoryClick: (categoryId: string) => void;
}

const CategoryTitle = ({ categoryTitle, categories, onCategoryClick }: CategoryTitleProps) => {
    const colorTitle = (title: string) => title === categoryTitle.toString();

    return (
        <Box className={clsN(styles['category-title-wrapper'])}>
            <Text className={clsN(styles['category-title'])} variant="h3" text={categoryTitle} />
            {categories.length > 0 ? (
                <Box className={clsN(styles['category-items'])}>
                    {categories.map((category) => (
                        <Text
                            key={category.publicId}
                            className={clsN(styles['category-items__sub-title'], {
                                [styles['category-items__color']]: colorTitle(category.title),
                            })}
                            variant="button"
                            text={category.title}
                            onClick={() => onCategoryClick && onCategoryClick(category.publicId)}
                        />
                    ))}
                </Box>
            ) : undefined}
        </Box>
    );
};

export default CategoryTitle;
