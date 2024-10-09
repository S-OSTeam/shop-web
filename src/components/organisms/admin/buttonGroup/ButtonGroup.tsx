import React from 'react';
import { ButtonProps, Stack } from '@mui/material';
import Button from '@atoms/button/Button';
import clsN from 'classnames';

// 여러 버튼을 받음, 그리고 각 버튼마다 기능이 있고, 조건부로 어떤버튼은 보이거나 보여주지 않을 수 있음
interface ButtonGroupProps {
    buttonItems: ButtonProps[]; // 버튼들 객체 배열로 받음 {}, {}
}

export const ButtonGroup = ({ ...props }: ButtonGroupProps) => {
    // 버튼 생성기
    const buttonProvoder = props.buttonItems.map((item) => {
        return <Button {...item}>{item.children}</Button>;
    });

    return (
        <Stack direction="row" gap={1} className={clsN()} paddingTop={1}>
            {buttonProvoder}
        </Stack>
    );
};
