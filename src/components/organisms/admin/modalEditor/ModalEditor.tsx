import React, { useRef } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Box, ButtonProps, Modal, Stack } from '@mui/material';
import { TinyEditorBasic } from '@commons/tinyEditor/TinyEditorBasic';
import { Input } from '@atoms/input/Input';
import { ButtonGroup } from '@organisms/admin/buttonGroup/ButtonGroup';
import clsN from 'classnames';
import styles from './styles/ModalEditor.module.scss';

interface ModalEditorProps {
    /* 제목 입력란 혹은 카테고리가 필요할 수 있음 */
    requireTitle?: boolean; // 제목 입력란 여부
    title?: string; // 제목 입력란 여부
    onTitleChange?: (newTitle: string) => void; // 제목 입력 이벤트
    editorRef: React.MutableRefObject<TinyMCEEditor | null>; // 포커스된 DOM 요소
    initialValue?: string; // 에디터 시작 컨텐츠
    open: boolean; // 모달 상태
    onClose: (event: Event, reason: 'backdropClick' | 'escapeKeyDown') => void; // 모달 종료 이벤트
    onEditorChange?: (content: string) => void; // 에디터 입력 이벤트
    buttonItems: ButtonProps[]; // 버튼 요소
}

export const ModalEditor = ({ editorRef, ...props }: ModalEditorProps) => {
    const currentEditorRef = useRef<TinyMCEEditor | null>(null);
    // 제목 요소 참조
    // const titleRef = useRef<string>(props.title || '');

    // 에디터 제목 입력 이벤트 콜백 메모이제이션
    const handleTitleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            props.onTitleChange?.(e.target.value);
        },
        [props.onTitleChange],
    );
    // 에디터 입력 이벤트
    const handleEditorChange = (newContent: string) => {
        props.onEditorChange?.(newContent);
    };
    // 에디터 초기값 입력 이벤트
    const handleEditorInit = React.useCallback(
        (editor: TinyMCEEditor) => {
            if (editorRef) currentEditorRef.current = editor;
        },
        [editorRef],
    );

    // 제목 상태 입력 이벤트가 느려서 메모이제이션 활용하기
    const titleArea = props.requireTitle && (
        <Input
            type="text"
            label="제목을 입력해주세요"
            variant="outlined"
            inputVal={props.title}
            onChange={handleTitleChange}
            className={clsN(styles.paper__input)}
            outlineClsN={clsN(styles['paper__input-title'])}
            placeholder="제목을 입력해주세요"
        />
    );
    // 렌더
    return (
        <Modal open={props.open} onClose={props.onClose}>
            <Stack className={clsN(styles.paper)} direction="column" alignItems="center" justifyContent="center">
                <Box className={clsN(styles.paper__editor)}>
                    {titleArea}
                    <TinyEditorBasic
                        onEditorInit={handleEditorInit}
                        editorRef={currentEditorRef}
                        initialValue={props.initialValue}
                        onChange={handleEditorChange}
                    />
                    <ButtonGroup rootPaperClsN={clsN(styles['paper__button-group'])} buttonItems={props.buttonItems} />
                </Box>
            </Stack>
        </Modal>
    );
};
ModalEditor.defaultProps = {
    initialValue: '',
    requireTitle: false,
    onEditorChange: () => {},
    title: undefined,
};
