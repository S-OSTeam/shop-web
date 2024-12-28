import React, { useState, useEffect } from 'react';
import CartTable from '@organisms/shopping/list/CartTable';
import Calculation from '@organisms/shopping/calculate/Calculation';
import { Stack } from '@mui/material';
import useGraphQL from '@hooks/useGraphQL';
import { GET_ALL_CART_LIST } from '@api/apollo/gql/queries/GetAllCartListQueries.gql';
import { UPDATE_CART_ITEM, DELETE_CART_ITEM } from '@api/apollo/gql/mutations/CartMutation.gql';
import Button from '@atoms/button/Button';

interface CartItem {
    id: string;
    img: string;
    name: string;
    price: number;
    quantity: number;
    checked: boolean;
}

interface CartResponse {
    title: string;
    content: string;
    price: number;
    image: string;
    itemId: string;
    cnt: number;
    check: boolean;
    __typename: string;
}

const Shopping = () => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const { data, refetch: fetchCartItems } = useGraphQL({
        query: GET_ALL_CART_LIST,
        type: 'query',
    });
    const { refetch: updateCartItem } = useGraphQL({
        query: UPDATE_CART_ITEM,
        type: 'mutation',
    });
    const { refetch: deleteCartItem } = useGraphQL({
        query: DELETE_CART_ITEM,
        type: 'mutation',
    });

    const handleDeleteCheckedItems = async () => {
        const checkedItemIds = items.filter((item) => item.checked).map((item) => item.id);

        if (checkedItemIds.length === 0) {
            alert('삭제할 상품을 선택해주세요.');
            return;
        }

        try {
            await Promise.all(
                checkedItemIds.map((itemId) =>
                    deleteCartItem({
                        variables: {
                            request: {
                                itemId,
                            },
                        },
                    }),
                ),
            );

            await fetchCartItems();
            alert('선택한 상품이 삭제되었습니다.');
        } catch (error) {
            console.error('Failed to delete cart items:', error);
            alert('상품 삭제에 실패했습니다.');
        }
    };

    useEffect(() => {
        const loadCartItems = async () => {
            try {
                await fetchCartItems();
            } catch (error) {
                console.error('Failed to fetch cart items:', error);
            }
        };

        loadCartItems();
    }, []);
    console.log(data);

    useEffect(() => {
        if (data?.getAllCartList) {
            console.log(data.getAllCartList);
            const cartItems: CartItem[] = data.getAllCartList.map((item: CartResponse) => ({
                id: item.itemId,
                img: item.image,
                name: item.title,
                price: item.price,
                quantity: item.cnt,
                checked: item.check,
            }));
            setItems(cartItems);

            setSelectAll(cartItems.every((item) => item.checked));
        }
    }, [data]);

    const calculateTotalPrice = () => {
        return items.filter((item) => item.checked).reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const calculateDiscountAmount = () => {
        const checkedItems = items.filter((item) => item.checked);
        return checkedItems.length > 0 ? 1500 : 0;
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
    const handleQuantityChange = async (id: string, quantity: number) => {
        try {
            setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));

            await updateCartItem({
                variables: {
                    request: {
                        itemId: id,
                        cnt: quantity,
                        checked: items.find((item) => item.id === id)?.checked || false,
                    },
                },
            });

            await fetchCartItems();
        } catch (error) {
            console.error('Failed to update cart item quantity:', error);

            await fetchCartItems();
        }
    };

    const handleCouponClick = (id: string) => {
        console.log(`쿠폰 로직은 아직 미완성 ${id}`);
    };

    return (
        <Stack spacing={2}>
            <CartTable
                items={items}
                selectAll={selectAll}
                onSelectAll={handleSelectAll}
                onItemCheck={handleItemCheck}
                onQuantityChange={handleQuantityChange}
                onCouponClick={handleCouponClick}
            />
            <Stack
                sx={{
                    '@media (max-width: 768px)': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.3rem',
                    },
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    sx={{
                        padding: '1rem',
                    }}
                >
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDeleteCheckedItems}
                        disabled={!items.some((item) => item.checked)}
                        sx={{
                            '@media (max-width: 768px)': {
                                width: '100%',
                            },
                        }}
                    >
                        선택 상품 삭제
                    </Button>
                </Stack>
                <Calculation
                    totalPrice={calculateTotalPrice()}
                    discountAmount={calculateDiscountAmount()}
                    finalAmount={calculateFinalAmount()}
                />
            </Stack>
        </Stack>
    );
};

export default Shopping;
