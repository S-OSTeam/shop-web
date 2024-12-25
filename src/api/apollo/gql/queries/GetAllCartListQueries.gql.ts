import { gql } from '@apollo/client';

export const GET_ALL_CART_LIST = gql`
    query GetAllCartList {
        getAllCartList {
            title
            content
            price
            image
            itemId
            cnt
            check
        }
    }
`;
