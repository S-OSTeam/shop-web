import { gql } from '@apollo/client';

export const ALL_CATEGORY_TREE = gql`
    query {
        findAllItemCategoriesTree {
            publicId
            title
            children {
                publicId
                title
            }
        }
    }
`;
