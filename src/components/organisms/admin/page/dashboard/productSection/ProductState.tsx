
import React from 'react';
import { productStateAtom, productStateType, slotType } from '@recoil/atoms/cs/productStateAtom';
import { Stack } from '@mui/material';
import { useRecoilValue } from 'recoil';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/OrderSection.module.scss';

// item 인터페이스
interface ProductItemProps {
    state: string;
    product: slotType;
}

interface OrderSectionProps {
    // root 클래스명
    className?: string;
}

export const ProductState = (
    {
        className
    }:OrderSectionProps
) => {

    /* 상태 */
    // 상품 현황 리코일 값 읽기
    const currentProductState = useRecoilValue(productStateAtom);

    /* 유기체 영역이 데이터 리코일 가져와서 사용하기 */
    const [productState] = React.useState<productStateType>(currentProductState);



    // 전시중
    // onDisplay: number;
    // 전시전
    // exhibition: number;
    // 비활성화
    // inactive: number;

    /* JSX 컴포넌트 */
    // 항목의 제목과 건
/*
    const currentState = <Stack className={clsN(styles.root__stack)}>
        <Text text={onDisplay.toString()} />
        <Text text={exhibition.toString()} />
    </Stack>
*/
    // 마지막 갱신일
    // const latestDate = <Text text={inactive.toString()} className={clsN(styles.root__date)}/>

    /* 함수 */
    // map 처리하면서 컴포넌트 리턴

    const ProductItem = ({state, product}: ProductItemProps) => {
        return(
            <Stack className={clsN()}>
                <Stack className={clsN()}>
                    <Text text={product.name}/>
                    <Text text={`${product.amount}`}/>
                </Stack>
                <Text text={product.date}/>
            </Stack>
        )
    }


    ProductItem();
    // 렌더
    return(
        <Stack direction='column' className={clsN(styles.root, className)} boxShadow={1}>
            ffsf
        </Stack>
    )
}