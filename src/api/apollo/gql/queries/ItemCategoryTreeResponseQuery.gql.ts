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

export const CATEGORY_TREE = gql`
    query ($request: String) {
        findSubCategoriesTree(categoryId: $request) {
            publicId
            title
            children {
                publicId
                title
            }
        }
    }
`;

export const PARENT_CATEGORY = gql`
    query ($request: String) {
        findItemCategoryByPublicId(publicId: $request) {
            publicId
            title
            parentPublicId
        }
    }
`;
