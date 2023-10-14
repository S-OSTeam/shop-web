import React from 'react';
import {Button, FormControl, InputLabel, Typography} from "@mui/material";
import {InputElement} from "../../../atoms/FAQ/InputCustom";

export const FaqForm = () => {
    return (
        <FormControl>
            <Typography variant={"h1"}>또 터졌나요?</Typography>
            <Typography variant={"h2"}>또 뭔 짓거리를 하신겁니까.</Typography>
            <InputLabel htmlFor='faq_title'/>
            <InputElement id='faq_title' ph="문의 제목"/>
            <InputLabel htmlFor='faq_context'/>
            <InputElement id='faq_context' ph="문의할 내용"/>
            <div>
                <Button>버튼</Button>
            </div>
        </FormControl>
    );
}