import React from 'react';
import clsN from 'classnames';
import { Divider } from '@mui/material';
import { HeadingPaper } from '@organisms/admin/paper/heading/HeadingPaper';

export const TitleProdmgt = () => {
    return (
        <HeadingPaper title="상품 조회" headingRootClsN={clsN()}>
            <Divider />
            {/* 칩 혹은 버튼 영역-> 몰큘즈로 */}
        </HeadingPaper>
    );
};
