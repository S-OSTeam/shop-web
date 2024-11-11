import { gql } from '@apollo/client';

export const CREATE_ITEM = gql`
    mutation ($request: ItemRequest!) {
        createItem(request: $request) {
            publicId
            categoryPublicId
            title
            content
            summary
            price
            sellCnt
            wishCnt
            stockCnt
            clickCnt
            avgReview
            reviewCnt
            qnaCnt
            status
            storeId
            freeDelivery
            imageUrls
            option
            productNumber
            deadline
            originalWork
            material
            size
            weight
            shippingCost
        }
    }
`;
