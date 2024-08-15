export const Path: PathAddress = {
    home: '/',
    login: '/login',
    signup: '/signup',
    product: '/shop/product',
    category: '/shop/category',
    event: '/shop/event',
    review: '/review',
    support: '/support',
    manager: '/manager',
};

interface PathAddress {
    home: string;
    login: string;
    signup: string;
    product: string;
    category: string;
    event: string;
    review: string;
    support: string;
    manager: string;
}
