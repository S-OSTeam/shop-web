/* eslint-disable */
import React from 'react';
import { AddCircleRounded, PlaylistAddCheckCircleRounded, HelpRounded, CancelRounded } from '@mui/icons-material';
import { Stack, useMediaQuery } from '@mui/material';
import QnaPaper from '@molecules/layout/surfaces/paper/qna/QnaPaperComponent';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/AlertBanner.module.scss';

interface AlertBannerProps {
    /* data */
    // 신규 문의
    cqa_new: number;
    // 전체 문의
    cqa_all: number;
    // 익명 문의
    cqa_anon: number;
    // 문의 보류
    cqa_del: number;
    /* classNames */


    // 메인 래퍼
    wrapperClsN?: string;
}

const AlertBanner = (
    {
        cqa_new,
        cqa_all,
        cqa_anon,
        cqa_del,
    }: AlertBannerProps) => {



    return (
        <Stack component='section' direction='row' useFlexGap flexWrap='wrap' justifyContent='space-around' spacing={1} className={clsN(`${style.banner_wrapper}`)}>
            <QnaPaper
                title='신규 문의'
                icon={<AddCircleRounded />}
                iconLabel={cqa_new}
                WrapperClassName={clsN(`${style.paper_wrapper}`)}
                iconClassName={clsN(`${style.icon_element}`)}
                titleClsN={clsN(`${style.title}`)}
            />
            <QnaPaper
                title='전체 문의'
                icon={<PlaylistAddCheckCircleRounded />}
                iconLabel={cqa_all}
                WrapperClassName={clsN(`${style.paper_wrapper}`)}
                iconClassName={clsN(`${style.icon_element}`)}
                titleClsN={clsN(`${style.title}`)}
            />
            <QnaPaper
                title='익명 문의'
                icon={<HelpRounded />}
                iconLabel={cqa_anon}
                WrapperClassName={clsN(`${style.paper_wrapper}`)}
                iconClassName={clsN(`${style.icon_element}`)}
                titleClsN={clsN(`${style.title}`)}
            />
            <QnaPaper
                title='문의 보류'
                icon={<CancelRounded />}
                iconLabel={cqa_del}
                WrapperClassName={clsN(`${style.paper_wrapper}`)}
                iconClassName={clsN(`${style.icon_element}`)}
                titleClsN={clsN(`${style.title}`)}
            />
        </Stack>
    );
};
export default AlertBanner;