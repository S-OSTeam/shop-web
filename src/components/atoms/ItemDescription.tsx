import React from 'react';
import '../../styles/ItemDescription.scss';
import classNames from 'classnames';

interface ItemDescriptionProps {
    des: string;
    href: string;
    isList?: string;
}

const ItemDescription = ({ des, href, isList }: ItemDescriptionProps) => {
    return (
        <div className={classNames('ItemDescriptionWrapper', isList)}>
            <a href={href}>{des}</a>
        </div>
    );
};

ItemDescription.defaultProps = {
    isList: undefined,
};
export default ItemDescription;
