import React from 'react';
import '../../styles/ItemDescription.scss';

interface ItemDescriptionProps {
    des: string;
}

const ItemDescription = ({ des }: ItemDescriptionProps) => {
    return (
        <div className="ItemDescriptionWrapper">
            <p>{des}</p>
        </div>
    );
};
export default ItemDescription;
