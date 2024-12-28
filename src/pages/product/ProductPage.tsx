import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '@atoms/button/Button';
import useGraphQL from '@hooks/useGraphQL';
import { ADD_CART_ITEM } from '@api/apollo/gql/mutations/CartMutation.gql';

const ProductPage = () => {
    const [searchParams] = useSearchParams();
    const { refetch: addCartItem } = useGraphQL({
        query: ADD_CART_ITEM,
        type: 'mutation',
    });

    const handleAddToCart = useCallback(async () => {
        const encodedPublicId = searchParams.get('publicId');
        if (encodedPublicId) {
            const decodedPublicId = atob(encodedPublicId);

            try {
                const result = await addCartItem({
                    variables: {
                        request: {
                            itemId: decodedPublicId,
                            cnt: 1,
                            checked: true,
                        },
                    },
                });

                console.log('장바구니 추가 결과:', result);
                alert('장바구니에 추가되었습니다.');
            } catch (error) {
                console.error('장바구니 추가 실패:', error);
                alert('장바구니 추가에 실패했습니다.');
            }
        }
    }, [searchParams, addCartItem]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Button variant="contained" onClick={handleAddToCart}>
                장바구니 추가
            </Button>
        </div>
    );
};

export default ProductPage;
