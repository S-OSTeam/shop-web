import React from 'react';

interface ItemProps {
    children: React.ReactNode;
}

const Item = ({ children }: ItemProps) => {
    return { children };
};

export default Item;
