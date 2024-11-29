import React, { useState } from 'react';
import CartTable from '@organisms/shopping/list/CartTable';
import Calculation from '@organisms/shopping/calculate/Calculation';
import { Stack } from '@mui/material';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    checked: boolean;
}

const Shopping = () => {
    const [items, setItems] = useState<CartItem[]>([
        {
            id: '1',
            name: '아무튼 이를 준나 긴 애니 피규어 준나줄나줄나줄길',
            price: 200000,
            quantity: 1,
            checked: false,
        },
        {
            id: '2',
            name: '으악os가 너무 싫어요 싫어싫어ㅈㅈㅈㅈㅈㅈㅈㅈㅈㅈㅈ',
            price: 400000,
            quantity: 1,
            checked: false,
        },
    ]);
    const [selectAll, setSelectAll] = useState(false);

    const calculateTotalPrice = () => {
        return items.filter((item) => item.checked).reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const calculateDiscountAmount = () => {
        const checkedItems = items.filter((item) => item.checked);
        return checkedItems.length > 0 ? 1500 : 0; // 선택된 상품이 있을 때만 할인
    };

    const calculateFinalAmount = () => {
        return calculateTotalPrice() - calculateDiscountAmount();
    };

    const handleSelectAll = (checked: boolean) => {
        setSelectAll(checked);
        setItems((prev) => prev.map((item) => ({ ...item, checked })));
    };

    const handleItemCheck = (id: string, checked: boolean) => {
        setItems((prev) => {
            const newItems = prev.map((item) => (item.id === id ? { ...item, checked } : item));

            setSelectAll(newItems.every((item) => item.checked));
            return newItems;
        });
    };
    const handleQuantityChange = (id: string, quantity: number) => {
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
    };

    const handleCouponClick = (id: string) => {
        console.log(`쿠폰 로직은 아직 미완성 ${id}`);
    };

    return (
        <Stack>
            <CartTable
                items={items}
                selectAll={selectAll}
                onSelectAll={handleSelectAll}
                onItemCheck={handleItemCheck}
                onQuantityChange={handleQuantityChange}
                onCouponClick={handleCouponClick}
            />
            <Calculation
                totalPrice={calculateTotalPrice()}
                discountAmount={calculateDiscountAmount()}
                finalAmount={calculateFinalAmount()}
            />
        </Stack>
    );
};

export default Shopping;
