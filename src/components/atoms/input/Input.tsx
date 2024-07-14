import React from 'react';
import TextField from '@mui/material/TextField';
import clsN from 'classnames';
import styles from './style/Input.module.scss';

interface InputProps {
    /* 클래스 요소 */
    // root 클래스명
    className?: string;
    // 아웃라인 클래스명
    outlineClsN?: string;

    // input 의 외형을 결정
    variant?: 'filled' | 'outlined' | 'standard';
    // 컴포넌트의 사이즈 small : 32px, medium: 40px?
    size?: 'small' | 'medium' | undefined;
    // input 필드의 오른쪽에 추가적 컨텐츠나 요소를 렌더링 할때 사용
    endAdornment?: React.ReactNode | undefined;
    // 항목의 설명
    label?: React.ReactNode | undefined;
    // 문자나 이미지 등의 요소가 들어갈 자리에 임시로 채워놓는 내용물을 의미
    placeholder?: string | undefined;
    // onChange 이벤트 활성화 시 오브젝트 e 를 통한 작업 처리 => 반환 없음
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    // 여러줄 여부
    multiline?: boolean | undefined;
    // form 컨트롤의 이름을 지정 주로 폼에 있는 내용을 서버에 보낼때 활용
    name?: string | undefined;
    // 가로 최대 확장 여부
    fullWidth?: boolean | undefined;
    // 새로운 type 속성 추가
    type?: React.InputHTMLAttributes<unknown>['type'];
}

export const Input = ({
    className,
    variant,
    size,
    endAdornment,
    label,
    placeholder,
    onChange,
    multiline,
    name,
    outlineClsN,
    fullWidth,
    type, // 새로운 속성 추가

}: InputProps) => {
    return (
        <TextField
            name={name}
            variant={variant}
            size={size}
            classes={{
                root: clsN(styles['root-input'], className),
            }}
            InputProps={{
                endAdornment,
                classes: {
                    notchedOutline: clsN(outlineClsN, styles['notched-outline']),
                },
            }}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            multiline={multiline}
            fullWidth={fullWidth}
            type={type} // TextField에 type 속성 전달

        />
    );
};

Input.defaultProps = {
    className: styles[''],
    outlineClsN: styles[''],
    variant: 'filled',
    size: 'medium',
    endAdornment: undefined,
    label: undefined,
    placeholder: undefined,
    onChange: undefined,
    multiline: undefined,
    name: undefined,
    fullWidth: undefined,
};
