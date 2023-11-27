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
        inquiryText: '안녕하세요 궁금한점이 있는데',
        inquiryContents: '재판의 심리와 판결은 공개한다. 다만, 심리는 국가의 안전보장 또는 안녕질서를 방해하거나 선량한 풍속을 해할 염려가 있을 때에는 법원의 결정으로 공개하지 아니할 수 있다. 국회는 선전포고, 국군의 외국에의 파견 또는 외국군대의 대한민국 영역안에서의 주류에 대한 동의권을 가진다. 농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다.',
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
        inquiryText: '반품이요',
        inquiryContents: '군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다.',
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
        inquiryText: '엄준',
        inquiryContents: '식',
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
        inquiryText: '취소할래요',
        inquiryContents: '국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다.',
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
        inquiryContents: '누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다.',
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