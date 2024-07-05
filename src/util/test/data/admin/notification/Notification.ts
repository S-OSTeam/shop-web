export interface NotificationProps {
    // 고유번호
    uid: string;
    // 업로더
    uploader: string;
    // 업로드일
    uploadDate: Date;
    // 수정일
    fixDate?: Date;
    // 공개 상태
    postState: 'public' | 'private';
    // 제목
    title: string;
    // 내용
    context: string;
    imageUrls?: string[];
}
export const Notification: NotificationProps[] = [
    {
        uid: '3354151',
        uploadDate: new Date('2024/06/06/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'public',
        title: '신규 회원 가입 이벤트',
        context: '새로 가입하신 회원님께 10% 할인 쿠폰을 드립니다!',
    },
    {
        uid: '3354152',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '여름 시즌 세일 안내',
        context: '7월 한 달간 전 상품 20% 할인됩니다',
    },
    {
        uid: '3354153',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '배송 지연 안내',
        context: '물류센터 이전으로 인해 배송이 1-2일 지연될 수 있습니다.',
    },
    {
        uid: '3354154',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '고객센터 운영시간 변경',
        context: '8월부터 고객센터 운영시간이 오전 9시부터 오후 6시로 변경됩니다.',
    },
    {
        uid: '3354155',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '적립금 소멸 예정 안내',
        context: '12개월 이상 미사용된 적립금은 8월 31일 소멸 예정입니다.',
    },
    {
        uid: '3354156',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '여름 시즌 세일 안내 내용: 7월 한 달간 전 상품 20% 할인됩니다.',
        context: '내용',
    },
    {
        uid: '3354157',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '모바일 앱 출시 안내',
        context: '더욱 편리한 쇼핑을 위한 모바일 앱이 출시되었습니다.',
    },
    {
        uid: '3354158',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '결제 시스템 점검 안내',
        context: '7월 15일 오전 2시부터 4시까지 결제 시스템 점검이 있을 예정입니다.',
    },
    {
        uid: '3354159',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '회원등급 혜택 개편 안내',
        context: '9월부터 회원등급별 혜택이 더욱 강화됩니다.',
    },
    {
        uid: '3354160',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '교환/반품 정책 변경 안내',
        context: '8월 1일부터 교환/반품 기간이 7일에서 14일로 연장됩니다.',
    },
    {
        uid: '3354161',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '가을 신상품 사전예약 안내',
        context: '가을 신상품 사전예약 시 10% 할인 및 사은품 증정!',
    },
    {
        uid: '3354162',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '온라인 고객만족도 조사 실시',
        context: '서비스 개선을 위한 고객만족도 조사에 참여해주세요.',
    },
    {
        uid: '3354163',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '카드사 무이자 할부 이벤트',
        context: '7월 한 달간 주요 카드사 6개월 무이자 할부 진행!',
    },
    {
        uid: '3354164',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '해외배송 서비스 오픈',
        context: '8월부터 미국, 일본, 중국 등 주요 국가로 해외배송이 가능합니다.',
    },
    {
        uid: '3354165',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '개인정보 처리방침 개정 안내',
        context: '7월 1일부로 개인정보 처리방침이 일부 개정되었습니다.',
    },
    {
        uid: '3354166',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '여름 휴가 기간 고객센터 운영 안내',
        context: '8월 1일부터 5일까지 고객센터 휴무입니다.',
    },
    {
        uid: '3354167',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '신규 브랜드 입점 안내',
        context: '유명 브랜드 "ABC"가 새롭게 입점하였습니다.',
    },
    {
        uid: '3354168',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '포인트 더블 적립 이벤트',
        context: '이번 주말 동안 구매 시 포인트 2배 적립!',
    },
    {
        uid: '3354169',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '회원 전용 특별 세일',
        context: '회원님들을 위한 깜짝 특가 세일을 진행합니다.',
    },
    {
        uid: '3354170',
        uploadDate: new Date('2024/06/07/'),
        uploader: 'Admin1',
        fixDate: undefined,
        postState: 'private',
        title: '사이트 리뉴얼 안내',
        context: '더욱 편리해진 새로운 사이트로 찾아뵙겠습니다.',
    },
];
