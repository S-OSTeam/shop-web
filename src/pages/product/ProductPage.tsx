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

    // 해당 Tab의 위치를 받아 오기 위한 변수(상세정보, 후기, 문의, 배송)
    const productDetailRef = useRef<HTMLDivElement>(null);
    const productReviewRef = useRef<HTMLDivElement>(null);
    const productFAQRef = useRef<HTMLDivElement>(null);
    const productDeliveryRef = useRef<HTMLDivElement>(null);
    // 해당 Tab의 위치 정보를 저장 하는 변수
    const [detailPosition, setDetailPosition] = useState({ top: 0, left: 0 });
    const [reviewPosition, setReviewPosition] = useState({ top: 0, left: 0 });
    const [FAQPosition, setFAQPosition] = useState({ top: 0, left: 0 });
    const [deliveryPosition, setDeliveryPosition] = useState({ top: 0, left: 0 });

    // Tab 클릭시 스크롤 위치 변경
    const onChangeScroll = (id: number) => {
        setTadId(id);
        switch (id) {
            case 1:
                window.scrollTo(0, detailPosition.top + 1);
                setScrollY(window.pageYOffset);
                setScrollActive(true);
                break;
            case 2:
                window.scrollTo(0, reviewPosition.top + 1);
                setScrollY(window.pageYOffset);
                setScrollActive(true);
                break;
            case 3:
                window.scrollTo(0, FAQPosition.top + 1);
                setScrollY(window.pageYOffset);
                setScrollActive(true);
                break;
            case 4:
                window.scrollTo(0, deliveryPosition.top + 1);
                setScrollY(window.pageYOffset);
                setScrollActive(true);
                break;
            default:
                break;
        }
    };

    // 스크롤을 내릴때 실시간으로 변경 되는지 확인하여 Tab active 적용해주기 위한 함수
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
            // 상세 정보 위치값 저장
            const rect = productDetailRef.current.getBoundingClientRect();
            setDetailPosition({
                top: rect.top,
                left: rect.left,
            });
        }
        if (productReviewRef.current) {
            // 후기 위치값 저장
            const rect = productReviewRef.current.getBoundingClientRect();
            setReviewPosition({
                top: rect.top,
                left: rect.left,
            });
        }
        if (productFAQRef.current) {
            // FAQ 위치값 저장
            const rect = productFAQRef.current.getBoundingClientRect();
            setFAQPosition({
                top: rect.top,
                left: rect.left,
            });
        }
        if (productDeliveryRef.current) {
            // 배달 안내 위치값 저장
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
                <ProductTab tabId={tadId} onclick={onChangeScroll} />
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
