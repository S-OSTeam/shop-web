import { ChangeEvent, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { FaqItem, faqListState } from '../../../recoil/atoms/FaqItemList';
import { FormControl, Input, InputLabel } from '@mui/material';

interface myProps {
}

export const FaqItemCreator = () => {
    /*상태*/
    // faq atom
    // const [faqItem, setFaqItem] = useRecoilState<FaqItem>();
    // faq_title
    const [inputValTitle, setInputValTitle] = useState<string>("");
    // faq_content
    const [inputValContext, setInputValContext] = useState<string>("");

    /*
    * 위에 받고
    * 리코일로 저장하고 초기화
    *
    * */

    /*
    * 리코일 상태관리
    * 컴포넌트 값 변경시 리랜더링됨
    */
    const setFaqList = useSetRecoilState(faqListState)

    /*서버 다운되었으니 useRef 넘버랑 스트링 합치기*/
    const renderNum = useRef(1);
    // 시간 구하는 메서드

    /*메서드*/
    const addItem = () => {
        setFaqList((preventList)=>[
            ...preventList,
            {
                faq_id: (renderNum + "userid"),
                fgr_id: "",
                faq_title: "",
                faq_content: "",
                faq_datetime: "",
                faq_ip: "",
            }
        ])
    };
    // 제목 입력값
    const onChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValContext(e.target.value);
    }


    // 내용 입력값

    return(
        <>
            <FormControl>
                <InputLabel htmlFor="inputTitle">문의제목</InputLabel>
                <Input
                    id="inputTitle"
                    onChange={onChangeTitle}

                />
            </FormControl>
        </>
    );
}