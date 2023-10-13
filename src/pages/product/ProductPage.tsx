import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import '../../styles/scss/_product.scss';
import TabText from '../../components/atoms/tab/TabText';
import ProductTab from '../../components/molecules/product/ProductTab';
import ProductInfo from './ProductInfo';

const ProductPage = () => {
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false);
    const [tadId, setTadId] = useState(1);

    const productDetailRef = useRef<HTMLDivElement>(null);
    const productReviewRef = useRef<HTMLDivElement>(null);
    const productFAQRef = useRef<HTMLDivElement>(null);
    const productDeliveryRef = useRef<HTMLDivElement>(null);
    const [detailPosition, setDetailPosition] = useState({ top: 0, left: 0 });
    const [reviewPosition, setReviewPosition] = useState({ top: 0, left: 0 });
    const [FAQPosition, setFAQPosition] = useState({ top: 0, left: 0 });
    const [deliveryPosition, setDeliveryPosition] = useState({ top: 0, left: 0 });

    const scrollHandler = () => {
        if (ScrollY > detailPosition.top) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
            setTadId(1);
            if (ScrollY > reviewPosition.top) {
                setScrollY(window.pageYOffset);
                setScrollActive(true);
                setTadId(2);
                if (ScrollY > FAQPosition.top) {
                    setScrollY(window.pageYOffset);
                    setScrollActive(true);
                    setTadId(3);
                    if (ScrollY > deliveryPosition.top) {
                        setScrollY(window.pageYOffset);
                        setScrollActive(true);
                        setTadId(4);
                    } else {
                        setScrollY(window.pageYOffset);
                        setScrollActive(true);
                        setTadId(3);
                    }
                } else {
                    setScrollY(window.pageYOffset);
                    setScrollActive(true);
                    setTadId(2);
                }
            } else {
                setScrollY(window.pageYOffset);
                setScrollActive(true);
                setTadId(1);
            }
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
            setTadId(1);
        }
    };
    useEffect(() => {
        function scrollListener() {
            window.addEventListener('scroll', scrollHandler);
        } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }; //  window 에서 스크롤을 감시를 종료
    });
    useEffect(() => {
        if (productDetailRef.current) {
            const rect = productDetailRef.current.getBoundingClientRect();
            setDetailPosition({
                top: rect.top,
                left: rect.left,
            });
        }
        if (productReviewRef.current) {
            const rect = productReviewRef.current.getBoundingClientRect();
            setReviewPosition({
                top: rect.top,
                left: rect.left,
            });
        }
        if (productFAQRef.current) {
            const rect = productFAQRef.current.getBoundingClientRect();
            setFAQPosition({
                top: rect.top,
                left: rect.left,
            });
        }
        if (productDeliveryRef.current) {
            const rect = productDeliveryRef.current.getBoundingClientRect();
            setDeliveryPosition({
                top: rect.top,
                left: rect.left,
            });
        }
    }, []);

    return (
        <Box className="productMain">
            <Box className="productInfo">
                <ProductInfo />
            </Box>
            <Box className={ScrollActive ? 'tabContent fixed' : 'tabContent'} ref={productDetailRef}>
                <ProductTab tabId={tadId} />
            </Box>
            <Box className="productDetail">
                <div />
            </Box>
            <TabText content="구매후기" dataRef={productReviewRef} />
            <Box className="productReview">
                <div />
            </Box>
            <TabText content="상품문의" dataRef={productFAQRef} />
            <Box className="productFAQ">
                <div />
            </Box>
            <TabText content="배송안내" dataRef={productDeliveryRef} />
            <Box className="productDelivery">
                <div />
            </Box>
        </Box>
    );
};

export default ProductPage;
