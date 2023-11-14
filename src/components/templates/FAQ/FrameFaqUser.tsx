import React from 'react';
import { useRecoilValue } from 'recoil';
import { Box } from '@mui/material';
import { booleanFaqState } from '../../../recoil/atoms/FaqItemList';
import { OrgTitle } from '../../organisms/faq/user/OrgTitle';
import { OrgContent } from '../../organisms/faq/user/OrgContent';
import { OrgBtnToggle } from '../../organisms/faq/user/OrgBtnToggle';
import { OrgInputForm } from '../../organisms/faq/user/OrgInputForm';
import { OrgFormGroup } from '../../organisms/faq/user/OrgFormGroup';
import { ClickEventBtn } from '../../molecules/FAQ_0_1/button/ClickEvtBtn';
import { OrgSelector } from '../../organisms/faq/user/OrgSelector';

export const FrameFaqUser = () => {
    // 버튼 클릭여부 체크
    const openCheck = useRecoilValue(booleanFaqState);
    const handleOnSubmit = () => {
        // eslint-disable-next-line
        console.log('submit 이벤트 실행');
        // eslint-disable-next-line
        console.log('입력값 문제없음');
    };

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleOnSubmit();
    };
    return (
        <Box id="faqMainWrapper" component="div">
            <div className="styled-wrapper">
                <OrgTitle />
                <OrgBtnToggle id="titleBtn" />
                <OrgContent isOpen={openCheck} />
                {openCheck && (
                    <Box
                        component="form"
                        onSubmit={handleOnSubmit}
                        sx={{
                            '.faq-onSubmit-btn': {
                                backgroundColor: '#80A1D4FF',
                                display: 'block',
                                margin: '0 auto',
                                marginTop: '15px',
                                color: '#fff',
                                padding: '5px 50px',
                                '&:hover': {
                                    backgroundColor: '#62bdff',
                                },
                            },
                        }}
                    >
                        <OrgSelector />
                        <OrgInputForm />
                        <OrgFormGroup />
                        <ClickEventBtn
                            id="SubmitBtn"
                            onClick={handleOnClick}
                            text="문의등록"
                            molClassName="faq-onSubmit-btn"
                        />
                    </Box>
                )}
            </div>
        </Box>
    );
};
