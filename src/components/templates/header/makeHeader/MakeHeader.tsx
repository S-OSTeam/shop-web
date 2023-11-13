import React from 'react';
import HeaderGenerator, { myHeaderProps, headerList, secondaryList } from '../../../organisms/header/HeaderGenerator';
import { Box } from '@mui/material';

const MakeHeader = () => {
    // const temp: myHeaderProps = {
    //     // itemData: [],
    // };
    const testTemp = new Map([]);
    const tempTitle = [
        { title: '캐릭터▾', href: '' },
        { title: '만화▾' },
        { title: '게임▾' },
        { title: '개인 커스텀▾' },
        { title: '문의▾' },
    ];

    const tempDepth = [
        {
            href: '',
            title: '주술회전',
        },
        {
            href: '',
            title: '나루토질풍전풍둔나선수리검',
        },
        {
            href: '',
            title: '주술회전',
        },
        {
            href: '',
            title: '나루토질풍전풍둔나선수리검',
        },
        {
            href: '',
            title: '주술회전',
        },
        {
            href: '',
            title: '나루토질풍전풍둔나선수리검',
        },
        {
            href: '',
            title: '주술회전',
        },
        {
            href: '',
            title: '나루토질풍전풍둔나선수리검',
        },
        {
            href: '',
            title: '주술회전',
        },
        {
            href: '',
            title: '나루토질풍전풍둔나선수리검',
        },
    ];
    // testTemp = ;
    return (
        <Box component="header">
            <HeaderGenerator itemData={temp.itemData} />
        </Box>
    );
};
