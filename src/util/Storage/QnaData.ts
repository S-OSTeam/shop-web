/*
* 상품
* 배송
* 반품/환불
* 취소
* 교환
* 기타
*/
interface QuestionTypes {
    type: 'product' | 'shipping' | 'return/refund' | 'cancellation' | 'exchange' | 'other';
}

interface ImageUrl {
    src: string;
    alt: string;
}

export interface QnaDataInterface extends QuestionTypes {
    date: string;
    userId: string;
    productId: string;
    productName: string;
    inquiryText: string;
    inquiryContents: string;
    image?: ImageUrl[];
}

const QnaData: QnaDataInterface[] = [
    {
        date: '2023.11.25/21:53',
        userId: 'user1511',
        productId: '135144',
        productName: '가나다상품',
        inquiryText: '제목',
        inquiryContents: '내용',
        type: 'product',
        image: [
            {
                src: '',
                alt: '',
            },
        ],
    },
    {
        date: '2023.11.26/11:53',
        userId: 'user1351',
        productId: '345612',
        productName: '나다가상품',
        inquiryText: '제목',
        inquiryContents: '내용',
        type: 'return/refund',
        image: [
            {
                src: '',
                alt: '',
            },
        ],
    },
    {
        date: '2023.11.26/04:02',
        userId: 'user1431',
        productId: '545321',
        productName: '가다나상품',
        inquiryText: '제목',
        inquiryContents: '내용',
        type: 'other',
        image: [
            {
                src: '',
                alt: '',
            },
        ],
    },
    {
        date: '2023.11.26/09:36',
        userId: 'user1551',
        productId: '351246',
        productName: '마바사상품',
        inquiryText: '제목',
        inquiryContents: '내용',
        type: 'cancellation',
        image: [
            {
                src: '',
                alt: '',
            },
        ],
    },
    {
        date: '2023.11.26/10:24',
        userId: 'user1356',
        productId: '124134',
        productName: '헬로월드',
        inquiryText: '제목',
        inquiryContents: '내용',
        type: 'product',
        image: [
            {
                src: '',
                alt: '',
            },
        ],
    },
];
export default QnaData;