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

export const FIND_ITEM_CATEGORY_BY_PUBLICID = gql`
    query ($request: String) {
        findItemCategoryByPublicId(publicId: $request) {
            title
            publicId
            parentPublicId
        }
    }
`;

export const CATEGORY_TREE = gql`
    query ($request: String) {
        findSubItemCategoriesTree(categoryId: $request) {
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
