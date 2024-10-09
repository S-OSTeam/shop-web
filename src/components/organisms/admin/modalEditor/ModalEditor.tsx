import React from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Box, ButtonProps, Modal } from '@mui/material';
import { TinyEditorBasic } from '@commons/tinyEditor/TinyEditorBasic';
import { ButtonGroup } from '@organisms/admin/buttonGroup/ButtonGroup';

interface ModalEditorProps {
    editorRef: React.MutableRefObject<TinyMCEEditor | null>; // 포커스된 DOM 요소
    initialValue?: string; // 에디터 시작 컨텐츠
    open: boolean; // 모달 상태
    onClose: (event: Event, reason: 'backdropClick' | 'escapeKeyDown') => void; // 모달 종료 이벤트
    onEditorChange?: (content: string) => void; // 에디터 입력 이벤트
    buttonItems: ButtonProps[]; // 버튼 요소
}

export const ModalEditor = ({ ...props }: ModalEditorProps) => {
    // 에디터 입력 이벤트
    const handleEditorChange = (newContent: string) => {
        props.onEditorChange?.(newContent);
    };
    // 렌더
    return (
        <Modal open={props.open} onClose={props.onClose}>
            <Box>
                <TinyEditorBasic
                    editorRef={props.editorRef}
                    initialValue={props.initialValue}
                    onChange={handleEditorChange}
                />
                <ButtonGroup buttonItems={props.buttonItems} />
            </Box>
        </Modal>
    );
};
ModalEditor.defaultProps = {
    initialValue: '',
};
