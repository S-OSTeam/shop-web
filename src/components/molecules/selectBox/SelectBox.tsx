import React from 'react';
import { ButtonProps, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/SelectBox.module.scss';

/*
 * The labelId is the id for the label element associated with the select, in this case the InputLabel. The id is the id for the select element itself
 * 레이블 ID 의 경우 셀렉트와 연관되어 있는지 라벨 속성 ID 로 활용
 * 하지만 ID 를 적기보단 그냥 CODE 사용하기
 */

// SelectBox 속성 인터페이스
interface SelectBoxProps<T> {
    // Root-Form className
    formClsN?: string;
    // label className
    labelClsN?: string;
    // 클래스명
    className?: string;
    // 인풋 레이블
    inputLabel?: string;
    // MenuItem
    MenuItems: T[];
    // MenuItemRender: 인자에 따라 MenuItem 리턴
    MenuRender: (item: T) => React.ReactNode;
    // 셀렉트 메뉴 클릭 이벤트
    handleMenuChange: (e: SelectChangeEvent) => void;
    // selectBox 에 선택된 값
    value: ButtonProps['value'];
    // 접근성을 위한 레이블 ID
    labelId?: string;
    // 셀렉트의 ID
    selectId?: string;
}
// 셀렉트 박스 컴포넌트
export const SelectBox = <T,>({
    formClsN,
    labelClsN,
    className,
    inputLabel,
    MenuItems,
    MenuRender,
    handleMenuChange,
    value,
    labelId,
    selectId,
}: SelectBoxProps<T>) => {
    /* 상태 */
    // 부모가 관리
    /* 함수 */
    // change 이벤트
    // MenuItem 아이템 갯수만큼 map 으로 새롭게 만들기
    const menuMapping = MenuItems.map((item: T) => {
        // 제너릭타입 인자의 속성을 받는 MenuRender 함수 리턴
        return MenuRender(item);
    });
    /* JSX 컴포넌트 */
    // inputLabel 컴포넌트
    const iptLabel = (
        <InputLabel id={labelId} className={clsN(labelClsN, styles['select-form__label'])}>
            {inputLabel}
        </InputLabel>
    );

    /* 렌더 */
    return (
        <FormControl className={clsN(formClsN, styles['select-from'])}>
            {iptLabel}
            <Select
                labelId={labelId}
                id={selectId}
                value={value?.toString()}
                className={clsN(className, styles['select-form__select'])}
                classes={{
                    root: clsN(styles['select-root']),
                }}
                onChange={handleMenuChange}
            >
                {menuMapping}
            </Select>
        </FormControl>
    );
};
// defaultProps
SelectBox.defaultProps = {
    formClsN: styles['select-form'],
    labelClsN: styles['select-form__label'],
    className: styles['select-form__select'],
    inputLabel: undefined,
    labelId: undefined,
    selectId: undefined,
};
