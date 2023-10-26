import React from 'react';
import { FrameQnaTemplate } from '../../components/templates/FAQ/FrameQnaTemplate';

export interface myTableInterfaceProps {
    thContext: string[];
}

export const PageQna = () => {
    const th = ['답변상태', '제목', '닉네임', '작성일'];

    return (
        <FrameQnaTemplate
            thContext={th}
        />
    );
}