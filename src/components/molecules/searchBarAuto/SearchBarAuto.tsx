/* eslint-disable */
import React from 'react';
import { Autocomplete, TextField, createFilterOptions } from '@mui/material';
import searchItemAtom from '@recoil/atoms/cs/searchItemAtom';
import { useSetRecoilState } from 'recoil';
import clsN from 'classnames';
import styles from './style/SearchBar.module.scss';
import PropTypes from 'prop-types';
import { inherits } from 'util';



/*
* 부모로 부터 인터페이스에 맞게 정리된 아톰 데이터를 옵션으로 받아들여옴
* 과정
* 해당 인풋에 포커싱이 될 때
* 로딩이벤트가(혹은 없는채) 발생하면서 데이터를 읽어들어옴
* 키 입력 시 N 초마다 맞는 일치하는 데이터의 키워드를 햄버거 메뉴쳐럼 나열함
* 햄버거 메뉴에 나열된 옵션을 클릭할 경우 어떻게할 건가?
* 리코일 상태를 활용함
* 클릭이벤트를 통해 해당 클릭한 정보는 ...
* - 첫번째 아톰으로 저장
* -- 아톰의 구조는 제목, 답변, 인덱스로 정하기 (당연히 클릭한 옵션은 첫번째로)
* 클릭이벤트 시 형제 컴포넌트가 아톰에 인덱스 순으로 콜랩스 아이템들을 랜더함
* 완료 후 생성한 첫번째 인덱스의 콜랩스는 펼쳐지게 설정함과 동시에 DOM 스크롤 위치 자연스럽게 이동시킴
* 더보기 버튼을 클릭하여 아톰에 아직 데이터가 남아있다면 5개씩 아이템 랜더
* Autocomplete 에 필요한 속성
* options
*
* */

/**
 * 옵션의 구조는 다음과 같음
 const options = [
 { label: 'The Godfather', id: 1 },
 { label: 'Pulp Fiction', id: 2 },
 ];
 // or
 const options = ['The Godfather', 'Pulp Fiction'];
 배열객체 쓰기로
 */

export interface OptionDataType {
    id: number;
    question: string;
    answer: string;
}


interface SearchBarProps {
    // Autocomplete 컴포넌트 클래스명
    className?: string;
    // inputField 클래스명
    inputClsN?: string;
    iconClsN?: string;
    fieldsetClsN?: string;
    placeholder?: string;
    inputLabel?: string;
    // 읽기전용(변형 불가) 알수없음 <배열>
    options: OptionDataType[];
    onSubmit?: () => void;
}

const SearchBarAuto = (
    {
        className,
        inputClsN,
        iconClsN,
        onSubmit,
        options,
        inputLabel,
        placeholder,
        fieldsetClsN
    }: SearchBarProps,
) => {

    // 포커스 상태
    const [isFocus, setIsFocus] = React.useState<boolean>(false);

    // 스팸 방지 딜레이 구현하기


    // 인풋 관련
    const [iptVal, SetIptVal] = React.useState<string>('');

    // 페이지 렌더시 받아온 options 데이터를 정리하기

    // input 값이 바뀔때 마다 부모 함수 실행하기 위해 콜백 활용하기
    React.useEffect(() => {
        // 긁어온 아톰의 값을 필터를 통해 옵션에 정리하기
    }, [SetIptVal]);

    // 필터
    const filter = createFilterOptions<{ question: string, answer: string }>();

    // 메소드
    // 포커스 이벤트
    const handleFocus = () => {
        setIsFocus(true);
    }
    const handleUnFocus = () => {
        setIsFocus(false);
    }

    // 아톰 값 수정하기 위해 훅 사용
    const setSearchAtom = useSetRecoilState(searchItemAtom);

    // input 입력
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        // e.target.value
        SetIptVal(e.target.value);
    };
    // submit 혹은 clear 시 초기화 실행
    const onClear = () => {
        SetIptVal('');
    };

    // submit 시 실행할 이벤트 --> 조회된 아이템들을 정리해서 전달 (콜백으로) 즉 엔터 이벤트
    const handleSubmit = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && iptVal !== '') {
            // '' 가 아닐 경우 부모를 통한 콜백으로 입력한 인풋 키워드와 아톰에 해당 값 전달하기
            // 데이터 매칭처리를 위해 추출된 데이터와 입력한 데이터를 소문자로 바꾸고 해당 값이 입력값에 포함되면 추출함, 한글도 괜찮음
            // 1. 키워드를 적고 엔터시 해당 키워드와 일치하는 옵션들을 아톰에 저장 후 콜백처리
            const tempOptions = options.filter(item => item.question.toLowerCase().includes(iptVal.toLowerCase()));

            console.log(`tempOptions: ${tempOptions}`); // [object ...] 처리되는거 확인 이걸 아톰에 넣기
            filterSubmit(tempOptions);
        }
        // 현재 option 들만 아톰에 저장
    };
    const filterSubmit = (data: OptionDataType[]) => {
        // !!!! 주의 아톰에 필터를 바로 적용하는건 좋지 않음, useEffect 처리
        setSearchAtom(data);
        // 상태 업데이트를 어떻게 할 것인지 고민하기

    }


    // 위 입력값이 바뀔 때 마다 필터 상태 업데이트 체크하기
    React.useEffect(()=>{
        onClear();
    },[setSearchAtom]);

    // options 만들기
    return (
        <Autocomplete
            ListboxProps={{
                className: styles['list-box']
            }}
            classes={{
                root: clsN(className, styles['autocomplete']),
                // focused: clsN(styles['autocomplete__input-focused']),
                // input: clsN(inputClsN, styles['autocomplete__input']),
                paper: clsN(styles['autocomplete__paper']),
                popper: clsN(styles['autocomplete__popper']),
                hasPopupIcon: clsN(styles['autocomplete__has-icon']),
                listbox: clsN(styles['autocomplete__listbox']),
                groupUl: clsN(styles['autocomplete__group-ul']),
                groupLabel: clsN(styles['autocomplete__group-ul']),
                inputRoot: clsN(inputClsN, styles['autocomplete__input'])

            }}
            options={options}
            onSubmit={onSubmit}
            getOptionLabel={(option) => option.question}
            onKeyDown={handleSubmit}
            renderInput={
                (params) =>
                    <TextField
                        {...params}
                        className={clsN(inputClsN, styles['autocomplete__input'])}
                        label={inputLabel}
                        value={iptVal}
                        onChange={handleChange}
                        placeholder={placeholder}
                        onKeyDown={handleSubmit}
                        InputProps={{
                            ...params.InputProps,
                            classes: {
                                root: clsN(inputClsN, styles['autocomplete__input']),
                                notchedOutline: clsN(fieldsetClsN, styles['autocomplete__fieldset']),
                                focused: clsN(fieldsetClsN, styles['autocomplete__input-focused']),
                            },
                        }}
                        size='small'
                    />
            }
        />
    );
};
SearchBarAuto.propTypes = {
    className: PropTypes.string,
    inputClsN: PropTypes.string,
    iconClsN: PropTypes.string,
    onSubmit: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    })).isRequired,
    inputLabel: PropTypes.string,
    placeholder: PropTypes.string,
    fieldsetClsN: PropTypes.string,
}
SearchBarAuto.defaultProps = {
    className: styles.autocomplete,
    inputClsN: styles['autocomplete__input'],
    iconClsN: styles['autocomplete__icon'],
    onSubmit: undefined,
    inputLabel: undefined,
    placeholder: undefined,
    fieldsetClsN: styles['autocomplete__fieldset']
}
export default SearchBarAuto;
