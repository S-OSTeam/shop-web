import React from 'react';
import { category } from '@util/test/data/CategoryResponse';
import Text from '@atoms/text/Text';
import styles from '@components/layout/header/category/styles/CategoryHeader.module.scss';
import { Box } from '@mui/material';
import clsN from 'classnames';
import Button from '@atoms/button/Button';
import Icon from '@atoms/source/icon/Icon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CategoryHeaderProps {
    onMouseOver: (title: string) => void;
}

const CategoryHeader = ({ onMouseOver }: CategoryHeaderProps) => {
    return (
        <Box className={clsN(styles.category)}>
            {category.map((item) => (
                <React.Fragment key={undefined}>
                    <Button
                        className={styles.parentCategory}
                        variant="text"
                        onMouseOver={() => onMouseOver && onMouseOver(item.title)}
                    >
                        <Text className={styles.categoryTitle} text={`${item.title}`} />
                        <Icon
                            className={styles.categoryArrow}
                            icon={<ExpandMoreIcon fontSize="inherit" />}
                            fontSize="inherit"
                        />
                    </Button>
                </React.Fragment>
            ))}
        </Box>
    );
};

export default CategoryHeader;
