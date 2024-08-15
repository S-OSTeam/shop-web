export interface ReviewResponse {
    reviewId: string;
    title: string;
    content: string;
    parentPublicId: string;
    score: number;
    status: boolean;
    userId: string;
    itemId: string;
    imageUrls: string[];
    likeUsers: number;
    purchaseOptions: string[];
}
