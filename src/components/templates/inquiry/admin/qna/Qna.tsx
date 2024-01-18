/* eslint-disable */
/* Template - Q&A Admin */
import React from 'react';
import { Box } from '@mui/material';
import RecentCqa from '@organisms/inquiry/article/recentCqa/RecentCqa';

/* interface - page 로 부터 데이터 받아오기 */

/*
* --
* - <헤더>
* - <올거니즘1>
* - <올거니즘2>
* - <푸터>
* */

const Qna = () => {

    return(
        <Box
            component='div'
        >
            <Box>
                <RecentCqa />
                <section/>
            </Box>
        </Box>
    )
}

export default Qna;