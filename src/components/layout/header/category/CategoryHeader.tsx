import React from 'react';
import styles from '@components/layout/header/category/styles/CategoryHeader.module.scss';
import clsN from 'classnames';
import { category } from '@util/test/data/CategoryResponse';
import Text from '@atoms/text/Text';
import Icon from '@atoms/source/icon/Icon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CategoryHeaderProps {
    onClick: (title: string) => void;
}

const CategoryHeader = ({ onClick }: CategoryHeaderProps) => {
    return (
        <ul className={clsN(styles.category)}>
            {category.map((item) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <li
                    className={clsN(`${styles.parentCategory}`)}
                    key={undefined}
                    onClick={() => onClick && onClick(item.title)}
                >
                    <Text text={item.title} />
                    <Icon icon={<ExpandMoreIcon fontSize="inherit" />} fontSize="inherit" />
                </li>
            ))}
        </ul>
    );
};

export default CategoryHeader;
