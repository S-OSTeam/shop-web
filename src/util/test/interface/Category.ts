export interface ItemCategoryResponse {
    title: string;
    publicId: number;
    parentPublicId: number;
}

export interface ItemCategoryTreeResponse {
    title: string;
    children: ItemCategoryTreeResponse[];
}
