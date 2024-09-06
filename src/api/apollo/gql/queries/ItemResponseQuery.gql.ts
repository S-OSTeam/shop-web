import { gql } from '@apollo/client';

export const SEARCH_ITEM = gql`
    query SearchItem($request: ItemSearchRequest!) {
        searchItem(request: $request) {
            items {
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
                sellerId
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
            totalCount
        }
    }
`;
