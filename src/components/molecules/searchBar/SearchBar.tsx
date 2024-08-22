import React from 'react';
import { Search } from '@mui/icons-material';
import { InputAdornment, Stack } from '@mui/material';
import { Input } from '@atoms/input/Input';
import clsN from 'classnames';
import styles from './styles/SearchBar.module.scss';

/* 검색 관련 쿼리 */
interface SearchBarProps {
    wrapperClsN?: string;
    inputClsN?: string;
    placeholder?: string;
    inputVal: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: React.ReactNode;
}

const SearchBar = ({ wrapperClsN, inputClsN, placeholder, onChange, label, inputVal }: SearchBarProps) => {
    // 검색 키워드에 저장할 정보
    // const renderOption = (props: React.HTMLAttributes<HTMLElement>, option: Partial<any>) => {
    //     return <li {...props}>{option.co}</li>
    // }

    /* 함수 */
    // form 전송 이벤트 방지
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <Stack
            component="form"
            classes={{
                root: clsN(wrapperClsN, styles.search),
            }}
            onSubmit={handleSubmit}
        >
            <Input
                className={clsN(inputClsN, styles.search__input)}
                placeholder={placeholder}
                inputVal={inputVal}
                onChange={onChange}
                multiline={false}
                size="small"
                variant="outlined"
                outlineClsN={clsN(styles['search__notched-outline'])}
                label={label}
                endAdornment={
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                }
                fullWidth
            />
        </Stack>
    );
};

SearchBar.defaultProps = {
    wrapperClsN: styles.wrapper,
    inputClsN: styles.wrapper__input,
    placeholder: undefined,
    onChange: undefined,
};
export default SearchBar;
