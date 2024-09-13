export interface ItemSearchRequest {
    pageNumber: string;
    pageSize: string;
    categoryPublicId?: string;
    publicId?: string;
    title?: string;
}

export interface ItemCategoryResponse {
    title: string;
    publicId: string;
    parentPublicId: string;
}

export interface ItemCategoryTreeResponse {
    title: string;
    children: ItemCategoryTreeResponse[];
    publicId: string;
}

export const EmptyCategoryTreeResponse: ItemCategoryTreeResponse[] = [
    {
        title: '',
        publicId: '',
        children: [],
    },
];
