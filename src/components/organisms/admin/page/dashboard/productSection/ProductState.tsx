import React from 'react';
import { productStateAtom, productStateType, slotType } from '@recoil/atoms/cs/productStateAtom';
import { Paper, Stack } from '@mui/material';
import { useRecoilValue } from 'recoil';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/OrderSection.module.scss';

interface OrderSectionProps {
    // root 클래스명
    className?: string;
}

export const ProductState = ({ className }: OrderSectionProps) => {
    /* 상태 */
    const productState = useRecoilValue<productStateType>(productStateAtom);
    /* 함수 */
    /// 파라미터 키값과 value 를 읽어들어 컴포넌트 반환
    const renderItems = (key: string, value: slotType) => {

        // value 조회
        const { name, amount, date } = value;
        return (
            <Paper
                className={clsN(styles['item-state'])} elevation={0} variant='outlined'
            >
                <Stack className={clsN(styles['item-state__stack'])} direction="row" justifyContent="space-between">
                    <Text text={name} className={clsN(styles['item-state__stack__title'])} />
                    <Text text={`${amount}건`} className={clsN(styles['item-state__stack__amount'])} />
                </Stack>
                <Text text={`마지막 업데이트 ${date}`} className={clsN(styles['item-state__date'])} />
            </Paper>
        );
    };
    /// 오브젝트 체크
    // 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환
    // ??? for...in 루프와 다른점은 프로토타입 체인의 속성도 열거함
    // Object.entries(productState) === 순환1({ 키값 : slotType 데이터들}) 로 구성
    const renderItemDataProvider = Object.entries(productState).map(([key, value]) => {
        // Object.entries 를 통해 순환중인 { 키값, 데이터:slotType } 를 renderItems(키, 밸류) 파라미터를 전달받고 JSX 컴포넌트를 리턴함
        return renderItems(key, value);
    });

    /* JSX 컴포넌트 */

    // useEffect

    // 렌더
    return (
        <Paper className={clsN(styles.root, className)} elevation={2} variant='outlined'>
            <Text text="상품현황" variant="h4" className={clsN(styles.root__headline)} />
            <Stack className={clsN(styles['root__item-wrapper'])} alignItems="stretch" gap={1}>
                {renderItemDataProvider}
            </Stack>
        </Paper>
    );
};
ProductState.defaultProps = {
    className: styles.root
}