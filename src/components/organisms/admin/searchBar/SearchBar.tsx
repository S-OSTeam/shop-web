/* eslint-disable */
import React from 'react';
import { AutoComplete } from '@molecules/autoComplete/AutoComplete';
import { Stack } from '@mui/material';
import DateRange from '@molecules/dateRange/DateRange';
import clsN from 'classnames';
import styles from './styles/SearchBar.module.scss';

/** 제너릭을 통해 어떤 옵션인지 그리고 어떤 그룹타입인지 정해야함 */
/**
 * interface 대신 type 사용한 이유
 * 유니온, 인터섹션, 조건부 타입 등 더 복작한 타입연산을 쉽게 표현이 가능함
 * 인터페이스의 경우 extends 를 통한 확장이 가능하나, 유니온이나 인터섹션같은 타입연산의 경우 직접 표현하기 어려움
 */

/**
 * @template Opt 옵션 타입
 * @template Group 그룹 타입
 * @template ShowClearable 선택 초기화 비활성화 여부 default : false
 * @template ShowDateRange 날자범위 활성화 여부 default : false
 * @template ShowCategories 카테고리 활성화 여부 default : false
 * */

/** searchBarProp 에 쓰일 기본 인터페이스  */
interface BaseSearchBarProps<Opt> {
    // AutoComplete 에 활용될 옵션 목록들
    options: Opt[];
    // 선택 초기화 비활성화 여부 default : false
    showClear?: boolean;
    // 날자범위 활성화 여부 default : false
    showDateRange?: boolean;
    // 카테고리 표시 여부
    showCategories?: boolean;
    // AutoComplete 내부 옵션 그룹 정렬 여부 default : false
    showOptionGroup?: boolean;
}
/** 카테고리 적용 타입 */
type WithCategories<Categories> = {
    // 카테고리 표시 여부
    showCategories: true;
    // 카테고리 목록들
    categories: Categories[];
};
/** 카테고리 미적용 타입 */
type WithoutCategories = {
    // 카테고리 표시 여부
    showCategories?: false;
    // 카테고리 목록들
    categories?: never;
};
/** 옵션그룹 적용 타입 */
type WithOptionGroup<Group> = {
    // 옵션 그룹 표시 여부
    showOptionGroup: true;
    // 옵션그룹 목록
    optionGroup: Group;
};
/** 옵션그룹 미적용 타입 */
type WithoutOptionGroup = {
    // 옵션 그룹 표시 여부
    showOptionGroup?: false;
    // 옵션그룹 목록
    optionGroup?: never;
};
/** SearchBarProps 인터페이스
 *
 * */
type SearchBarProps<Opt, Group, Categories> = BaseSearchBarProps<Opt> &
    (WithCategories<Categories> | WithoutCategories) &
    (WithOptionGroup<Group> | WithoutOptionGroup);

const SearchBar = <Opt, Group, Categories>({
    showClear = false,
    showDateRange = false,
    ...props
}: SearchBarProps<Opt, Group, Categories>) => {
    /* 상태 */
    /* 변수 */
    /** DateRange 활성화 여부 */

    /** */
    /* 함수 */
    /* TSX */
    /** */
    /** AutoComplete 컴포넌트 */
    const AutoInput = <AutoComplete options={props.options} />;
    /** 카테고리 컴포넌트 */

    /* 렌더 */
    return (
        <Stack>
            {showDateRange && <DateRange className={clsN()} pickerClsN={clsN()} />}
            {AutoInput}
        </Stack>
    );
};
