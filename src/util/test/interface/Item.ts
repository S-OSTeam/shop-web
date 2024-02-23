export interface Item {
    publicId: number;
    categoryPublicId: number;
    title: string;
    content: string;
    summary: string;
    price: number;
    sellCnt: number;
    wishCnt: number;
    stockCnt: number;
    clickCnt: number;
    avgReview: number;
    reviewCnt: number;
    qnaCnt: number;
    status: boolean;
    sellerId: string;
    freeDelivery: boolean;
    imageUrls: string[];
}
