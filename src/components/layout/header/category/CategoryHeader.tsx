import React from 'react';
import styles from '@components/layout/header/category/styles/CategoryHeader.module.scss';
import clsN from 'classnames';
import { category } from '@util/test/data/CategoryResponse';
import Text from '@atoms/text/Text';
import Icon from '@atoms/source/icon/Icon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@components/layout/header/category/listItem/ListItem';

const CategoryHeader = () => {
    const onClick = (title: string) => {
        console.log(title);
    };

    return (
        <ul className={clsN(styles.category)}>
            {category.map((item) => (
                <React.Fragment key={item.publicId}>
                    <li
                        className={clsN(`${styles.parentCategory}`)}
                        onClick={() => onClick && onClick(item.title)}
                        onKeyDown={undefined}
                    >
                        <Text text={item.title} />
                        <Icon icon={<ExpandMoreIcon fontSize="inherit" />} fontSize="inherit" />
                        <ListItem className={`${styles.modalItem} ${styles.listItemsWrapper}`} items={item.children} />
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );
};

export default CategoryHeader;
