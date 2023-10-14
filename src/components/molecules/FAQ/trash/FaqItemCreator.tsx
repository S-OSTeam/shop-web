/* eslint-disable */
import React, { useCallback, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
    Box,
    Button, ButtonBaseActions, ButtonTypeMap,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Input,
    InputLabel,
    TextField,
    TextFieldProps,
    Typography,
} from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { atomFaqItem, faqListState } from '../../../../recoil/atoms/FaqItemList';
import '../../../../styles/scss/FaqCreatorStyles.scss';

interface myProps {
    isActive: boolean;
}

export const FaqItemCreator = ({ ...props }: myProps) => {
    /*상태*/
    // faq atom
    // const [faqItem, setFaqItem] = useRecoilState<FaqItem>();

    /*const [inputs, setInputs] = useState({
        title: '',
        context: '',
    });
    const { title, context } = inputs;
    */
    // textField input 제목
    const [inputTitle, setInputTitle] = useState<string>('');
    // textField input 내용
    const [inputContext, setInputContext] = useState<string>('');

    /* setRecoil */
    const [faqItems,setFaqItem] = useRecoilState<atomFaqItem[]>(faqListState);
    /*
     * 위에 받고
     * 리코일로 저장하고 초기화
     *
     * */

    /*
     * 리코일 상태관리
     * 컴포넌트 값 변경시 리랜더링됨
     */

    /*서버 다운되었으니 useRef 넘버랑 스트링 합치기*/
    const renderNum = useRef(1);
    // 시간 구하는 메서드

    // render boolean
    let isRender: boolean = props.isActive;

    /* 메서드 */


    // onSubmit
    const addItem = (e: React.MouseEvent<HTMLElement>) => {
        console.log(`stop on Submit!`);
        e.preventDefault();
        if (!inputTitle) {
            alert('제목을 입력해 주세요');
            return;
        }
        if (!inputContext) {
            alert('내용을 입력해 주세요');
            return;
        }
        if (inputTitle) {
            if (inputContext) {
                const item: atomFaqItem = {
                    faq_id:'',
                    fgr_id: '',
                    faq_title: inputTitle,
                    faq_content: inputContext,
                    faq_datetime: '',
                    faq_ip: '',
                    faq_alert_mail: false,
                    faq_alert_sns: false,
                    faq_is_private: false
                };
                setFaqItem([...faqItems, item])
            }
        }
    };
    return (
        <Box className={`faq-creator render-${isRender.toString()}`} id='faqCreator'>
            {props.isActive && (
                <form>
                    <Typography component='h2' variant='h5' gutterBottom>
                        궁금하신 사항이 있나요?
                    </Typography>
                    <Typography component='h3' variant='h6' gutterBottom>
                        빠르게 답변해 드리겠습니다.
                    </Typography>
                    <FormControl className='faq-area title'>
                        <InputLabel htmlFor='inputTitle' />
                        <TextField
                            id='inputTitle'
                            className='mui-faq-input title'
                            label='제목'
                            value={inputTitle}
                            onChange={(e) => {
                                setInputTitle(e.target.value);
                            }}
                            placeholder='제목 기입란'
                            required
                        />
                    </FormControl>
                    <FormControl className='faq-area context'>
                        <InputLabel htmlFor='inputContext' />
                        <TextField
                            id='inputContext'
                            className='mui-faq-input context'
                            label='내용'
                            value={inputContext}
                            onChange={(e) => {
                                setInputContext(e.target.value);
                            }}
                            multiline
                            placeholder='내용 기입란'
                            required
                            rows={6}
                        />
                    </FormControl>
                    <FormGroup className='faq-area form-group-check'>
                        <FormControlLabel control={<Checkbox />} label='답변 완료시 SNS 수신 동의' />
                        <FormControlLabel control={<Checkbox />} label='답변 완료시 메일 수신 동의' />
                        <FormControlLabel control={<Checkbox />} label='익명으로 문의하기' />
                    </FormGroup>
                    <Button
                        variant='text'
                        id='submit-btn'
                        onClick={addItem}
                    >
                        문의하기
                    </Button>
                </form>
            )}
        </Box>
    );
};

/*
 * 섹션 분리하기
 * 문의제목
 * 내용
 *
 * */
