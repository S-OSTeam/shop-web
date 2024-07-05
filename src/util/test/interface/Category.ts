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

export interface tokenResponse {
    accessToken: string;
    refreshToken: string;
    userId: string;
    issuedAt: Date;
}
