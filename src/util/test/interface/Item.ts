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
    storeId: string;
    freeDelivery: boolean;
    imageUrls: string[];
}

export interface ItemInterface {
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
    storeId: string;
    freeDelivery: boolean;
    imageUrls: string[];
    option: string[];
    productNumber: string;
    deadline: string;
    originalWork: string;
    material: string;
    size: string;
    weight: string;
    shippingCost: number;
}
