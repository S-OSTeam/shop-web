/* eslint-disable */
import React from 'react';
import { Box, Breadcrumbs, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/MainNav.module.scss';
import SearchBarAuto from '@molecules/searchBarAuto/SearchBarAuto';
import SearchBar from '@molecules/searchBar/SearchBar';
import UserLoginPlace from '@molecules/userLoginPlace/UserLoginPlace';


interface MainNavProps{
    // 클래스명
    className?: string;
    // 현재 라우터에 맞는 아이템
}

/**
 * 파라미터를 받아 해당 링크별 뎁스 표시
 *
 * @constructor
 */
const MainNav = (
    {
        className
    }:MainNavProps
) => {
    // 상태

    // 함수

    // 생성기
    // const linkGen

    React.useEffect(()=>{

    },[]);
    return(
        <Stack component='nav' className={clsN(className, styles.stack)} direction='row'>

            <SearchBarAuto options={[{id:0, question: '', answer: ''}]}/>
            <UserLoginPlace/>
        </Stack>
    );
};

export default MainNav;