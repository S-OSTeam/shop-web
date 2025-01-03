/* eslint-disable */
import React from 'react';
import { Button, Stack } from '@mui/material';
import { AddShoppingCart, ContentPasteSearch, FileOpen } from '@mui/icons-material';
import Text from '@atoms/text/Text';
import { ProductEventType } from '@interface/button/admin/product/register/ProductRegisterInterface';
import clsN from 'classnames';
import styles from './styles/ProductRegisterButtonGroup.module.scss';
import { ModalProductRegister } from '@templates/product/register/ModalProductRegister/ModalProductRegister';
import { useRecoilState } from 'recoil';
import { productRegisterAtom } from '@recoil/atoms/admin/product/register/ProductRegisterAtom';
import { INITIAL_PRODUCT_STATE } from '@util/common/admin/product/ProductStateSetup';

export const ProductRegisterButtonGroup = () => {
    const [productData, setProductData] = useRecoilState(productRegisterAtom); // 상품 정보 전역 상태 사용
    type ButtonItem = {
        label: string;
    };
    const [modalState, setModalState] = React.useState<boolean>(false);

    // 버튼 속성
    const buttonItems: ButtonItem[] = [
        {
            label: '상품등록',
        },
        {
            label: '불러오기',
        },
        {
            label: '템플릿',
        },
    ];

    /* 핸들러 */
    // 모달 반전 핸들러
    const handleModalChange = () => {
        setModalState((prev) => !prev);
    };

    // 상품 상세 정보 상태 초기화
    const handleResetProductInfo = () => {
        setProductData(INITIAL_PRODUCT_STATE);
    };

    // 버튼 클릭 이벤트
    const handleClick = (event: ProductEventType['event']) => {
        switch (event) {
            case 'regist': // 등록
                handleModalChange(); // 모달 반전 처리
                handleResetProductInfo(); // 전역상태 리코일 빈 값으로 설정
                break;
            case 'load':
                // 불러오기
                break;
            case 'template':
                // 템플릿 불러오기
                break;
        }
    };

    // 인덱스를 통해 이벤트 타입 반환
    const getEventType = (index: number): ProductEventType['event'] => {
        switch (index) {
            case 0:
                return 'regist'; // 0 등록
            case 1:
                return 'load'; // 1 불러오기
            case 2:
                return 'template'; // 2 템플릿 불러오기
            default:
                return 'regist'; // 기본 0 등록으로
        }
    };
    // 인덱스를 통해 아이콘 반환
    const getEventIcon = (index: number) => {
        switch (index) {
            case 0:
                return <AddShoppingCart className={clsN(styles['product-register__button__icon'])} />;
            case 1:
                return <FileOpen className={clsN(styles['product-register__button__icon'])} />;
            case 2:
                return <ContentPasteSearch className={clsN(styles['product-register__button__icon'])} />;
            default:
                return <AddShoppingCart className={clsN(styles['product-register__button__icon'])} />;
        }
    };

    // 버튼 컴포넌트 렌더
    const renderRegistButtons = (items: ButtonItem[]) =>
        items.map((item, index) => (
            <Button
                variant="contained"
                className={clsN(styles['product-register__button'])}
                onClick={() => handleClick(getEventType(index))}
            >
                <Stack direction="column" justifyContent="center" alignItems="center" gap={2}>
                    {getEventIcon(index)}
                    <Text text={item.label} className={clsN(styles['product-register__button__label'])} />
                </Stack>
            </Button>
        ));

    return (
        <Stack
            sx={{
                '& > :not(style)': {
                    margin: 'unset',
                    marginTop: 'unset',
                },
            }}
            className={clsN(styles['product-register'])}
            direction="row"
            gap={4}
            alignItems="center"
            justifyContent="center"
        >
            {renderRegistButtons(buttonItems)}
            <ModalProductRegister isOpen={modalState} />
        </Stack>
    );
};
