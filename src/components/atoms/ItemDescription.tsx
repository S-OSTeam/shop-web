import React from 'react';
import '../../styles/ItemDescription.scss';

interface ItemDescriptionProps {
    des: string;
    href: string;
}

const ItemDescription = ({ des, href }: ItemDescriptionProps) => {
    return (
        <div className="ItemDescriptionWrapper">
            <a href={href}>{des}</a>
        </div>
    );
};
export default ItemDescription;
