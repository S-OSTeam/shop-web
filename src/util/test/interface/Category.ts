export interface ItemCategoryResponse {
    title: string;
    publicId: number;
    parentPublicId: number;
}

export interface ItemCategoryTreeResponse {
    title: string;
    children: ItemCategoryTreeResponse[];
    publicId: number;
}

export interface tokenResponse {
    accessToken: string;
    refreshToken: string;
    userId: string;
    issuedAt: Date;
}
