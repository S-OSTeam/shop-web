export interface Review {
    reviewId: string;
    title: string;
    content: string;
    monthReview: string;
    score: number;
    status: boolean;
    userId: string;
    itemId: string;
    imageUrls: string[];
    likeUsers: number;
    purchaseOptions: string[];
}
