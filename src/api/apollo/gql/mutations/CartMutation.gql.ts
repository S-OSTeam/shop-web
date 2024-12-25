import { gql } from '@apollo/client';

export const ADD_CART_ITEM = gql`
    mutation AddCartItem($request: CartRequest!) {
        addCartItem(request: $request) {
            itemId
            cnt
            check
        }
    }
`;
export const DELETE_CART_ITEM = gql`
    mutation DeleteCartItem($request: CartDeleteRequest!) {
        deleteCartItem(request: $request)
    }
`;

export const UPDATE_CART_ITEM = gql`
    mutation UpdateCartItem($request: CartRequest!) {
        updateCartItem(request: $request) {
            itemId
            cnt
            check
        }
    }
`;
