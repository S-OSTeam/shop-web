import React from 'react';
import {
    Autocomplete as MuiAutocomplete,
    AutocompleteClasses,
    ChipProps,
    ChipTypeMap,
    UseAutocompleteProps,
} from '@mui/material';
import TextField from '@mui/material/TextField';

/**
 * @template Value 선택될 값의 타입
 * @template Multiple 다중 선택 가능 여부 default : false
 * @template DisableClearable 선택 초기화 비활성화 여부 default : false
 * @template FreeSolo 사용자 정의 값 입력 가능 여부 default : false
 * @template ChipComponent 선택된 값을 표시할 Chip 컴포넌트 타입
 */

/* AutoComplete 의 속성 classes Typy 를 Partoal<> 를 활용하여 따로 분리 */
export type PropOfAutoCompleteClasses = Partial<AutocompleteClasses>;

interface AutoCompleteProps<
    Value,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> {
    // AutoCompleteClasses : Partial<AutocompleteClasses>
    classes?: PropOfAutoCompleteClasses;
    // Chip 컴폰너트 요소
    ChipProps?: ChipProps<ChipComponent>;
    //
}
export const AutoComplete = <
    Value,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>({
    ...props
}: AutoCompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
    /* 상태 */
    /* 변수 */
    /* 함수 */
    /* TSX */
    /* 렌더 */
    return (
        <MuiAutocomplete
            classes={props.classes}
            options={props.options}
            renderInput={(params) => <TextField {...params} label="label" />}
        />
    );
};
