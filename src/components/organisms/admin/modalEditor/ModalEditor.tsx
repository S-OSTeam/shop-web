import React, { ChangeEvent } from 'react';
import { Box, ButtonProps, Modal, Stack } from '@mui/material';
import { TinyEditorBasicComponent } from '@commons/tinyEditor/TinyEditorBasic';
import { Input } from '@atoms/input/Input';
import { ButtonGroup } from '@organisms/admin/buttonGroup/ButtonGroup';
import clsN from 'classnames';
import styles from './styles/ModalEditor.module.scss';

interface ModalEditorProps {
    /* 제목 입력란 혹은 카테고리가 필요할 수 있음 */
    requireTitle?: boolean; // 제목 입력란 여부
    title?: string; // 제목 입력란 여부
    onTitleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 제목 입력 이벤트
    initialValue?: string; // 에디터 시작 컨텐츠
    open: boolean; // 모달 상태
    onClose: (event: Event, reason: 'backdropClick' | 'escapeKeyDown') => void; // 모달 종료 이벤트
    buttonItems: ButtonProps[]; // 버튼 요소
}

export const ModalEditor = ({ ...props }: ModalEditorProps) => {
    // 모달 컴포넌트 내부에만 에디터 상태가 관리되므로 현재 ModalEditor 에서 상태관리하기
    const [editorContent, setEditorContent] = React.useState<string>('');
    // 제목 영역 상태관리도 동일
    const [editorTitle, setEditorTitle] = React.useState<string>('');
    // 에디터 제목 입력 이벤트
    const handleTitlechange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditorTitle(e.target.value);
    };
    // 에디터 입력 이벤트
    const handleEditorChange = React.useCallback((content: string) => {
        setEditorContent(content);
        console.log(editorContent);
    }, []);
    // 제목 상태 입력 이벤트가 느려서 메모이제이션 활용하기
    const titleArea = props.requireTitle && (
        <Box className={clsN(styles.paper__input)}>
            <Input
                fullWidth
                type="text"
                label="제목을 입력해주세요"
                variant="filled"
                inputVal={editorTitle}
                onChange={handleTitlechange}
                className={clsN(styles['paper__input-title'])}
                outlineClsN={clsN(styles['paper__input-title'])}
                placeholder="제목을 입력해주세요"
            />
        </Box>
    );
    // 렌더
    return (
        <Modal open={props.open} onClose={props.onClose}>
            <Stack className={clsN(styles.paper)} direction="column" alignItems="center" justifyContent="center">
                <Box className={clsN(styles.paper__editor)}>
                    {titleArea}
                    <TinyEditorBasicComponent initialValue={props.initialValue} onEditorChange={handleEditorChange} />
                    <ButtonGroup rootPaperClsN={clsN(styles['paper__button-group'])} buttonItems={props.buttonItems} />
                </Box>
            </Stack>
        </Modal>
    );
};
ModalEditor.defaultProps = {
    initialValue: '',
    requireTitle: false,
    title: undefined,
};
