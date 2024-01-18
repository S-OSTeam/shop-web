export const categoryParent = [
    { title: '캐릭터', publicId: 1, parentPublicId: 0 },
    { title: '나루토', publicId: 2, parentPublicId: 1 },
    { title: '사스케', publicId: 3, parentPublicId: 2 },
    { title: '몽키 D 루피', publicId: 4, parentPublicId: 3 },
    { title: '에이스 야메로', publicId: 5, parentPublicId: 4 },
    { title: '만화', publicId: 6, parentPublicId: 0 },
    { title: '원피스', publicId: 7, parentPublicId: 6 },
    { title: '나루토', publicId: 8, parentPublicId: 7 },
    { title: '귀멸의 칼날', publicId: 9, parentPublicId: 8 },
    { title: '주술 회전', publicId: 10, parentPublicId: 9 },
];

export const category = [
    {
        title: '캐릭터',
        children: [
            {
                title: '나루토',
                children: [],
                publicId: 1,
            },
            {
                title: '사스케',
                children: [],
                publicId: 2,
            },
            {
                title: '몽키 D 루피',
                children: [],
                publicId: 3,
            },
            {
                title: '에이스 야메로',
                children: [],
                publicId: 4,
            },
        ],
        publicId: 1,
    },
    {
        title: '만화',
        children: [
            {
                title: '원피스',
                children: [],
                publicId: 1,
            },
            {
                title: '나루토',
                children: [],
                publicId: 2,
            },
            {
                title: '귀멸의 칼날',
                children: [],
                publicId: 3,
            },
            {
                title: '주술 회전',
                children: [],
                publicId: 4,
            },
        ],
        publicId: 2,
    },
    {
        title: '게임',
        children: [
            {
                title: '마리오',
                children: [],
                publicId: 1,
            },
            {
                title: '포켓몬',
                children: [],
                publicId: 2,
            },
            {
                title: '리그 오브 레전드',
                children: [],
                publicId: 3,
            },
            {
                title: '모여봐요 동물의 숲',
                children: [],
                publicId: 4,
            },
        ],
        publicId: 3,
    },
    {
        title: '개인커스텀',
        children: [],
        publicId: 4,
    },
    {
        title: '문의',
        children: [],
        publicId: 5,
    },
];
