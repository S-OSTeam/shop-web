import React from 'react';
/* eslint-disable-next-line */
import { Autocomplete, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import IconButton from '@molecules/button/iconButton/IconButton';
import Input from '@atoms/input/Input';
import clsN from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles/SearchBar.module.scss';

/* 검색 관련 쿼리 */
interface SearchBarProps {
    wrapperClsN?: string;
    inputClsN?: string;
    iconClsN?: string;
    placeholder?: string;
    onInput?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

const SearchBar = (
    {
        wrapperClsN,
        inputClsN,
        iconClsN,
        placeholder,
        onInput
    }: SearchBarProps,
) => {

    // 검색 키워드에 저장할 정보
    /* eslint-disable-next-line */
    const renderOption = (props: React.HTMLAttributes<HTMLElement>, option: Partial<any>) => {
        return <li {...props}>{option.co}</li>
    }

    return (
        <Paper
            component='form'
            classes={{
                root: clsN(wrapperClsN, styles.wrapper),

            }}
        >
            <Input
                className={clsN(inputClsN, styles.wrapper__input)}
                placeholder={placeholder}
                onChange={onInput}
                multiline={false}
            />
            <IconButton type='submit' aria-label='search' icon={<Search />}
                        className={clsN(iconClsN, styles.wrapper__icon)} />
        </Paper>
    );
};

/*

<Autocomplete
            renderInput={(params)=>(
                <Input
                    {...params}
                    className={clsN(inputClsN, styles.wrapper__input)}
                    placeholder={placeholder}
                    onChange={onInput}
                    multiline={false}
                />
            )}
            getOptionLabel={(option: Partial<any>)=> option.question ?? "N/A"}
            renderOption={renderOption}
        />
*/
SearchBar.propTypes = {
    wrapperClsN: PropTypes.string,
    inputClsN: PropTypes.string,
    iconClsN: PropTypes.string,
    placeholder: PropTypes.string,
    onInput: PropTypes.func,
};
SearchBar.defaultProps = {
    wrapperClsN: styles.wrapper,
    inputClsN: styles.wrapper__input,
    iconClsN: styles.wrapper__icon,
    placeholder: undefined,
    onInput: undefined
};
export default SearchBar;