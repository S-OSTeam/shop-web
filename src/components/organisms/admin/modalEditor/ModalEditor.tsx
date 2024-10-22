import React, { ChangeEvent } from 'react';
import { Box, ButtonProps, Modal, Stack } from '@mui/material';
import { TinyEditorBasicComponent } from '@commons/tinyEditor/TinyEditorBasic';
import { Input } from '@atoms/input/Input';
import { ButtonGroup } from '@organisms/admin/buttonGroup/ButtonGroup';
import { useRecoilState } from 'recoil';
import { noticeEditorStateAtom } from '@recoil/atoms/admin/inquiry/notices/noticeEditorAtom';
import clsN from 'classnames';
import styles from './styles/ModalEditor.module.scss';

interface ModalEditorProps {
    /* 제목 입력란 혹은 카테고리가 필요할 수 있음 */
    requireTitle?: boolean; // 제목 입력란 여부
    open: boolean; // 모달 상태
    onClose: (event: Event, reason: 'backdropClick' | 'escapeKeyDown') => void; // 모달 종료 이벤트
    buttonItems: ButtonProps[]; // 버튼 요소
    mode?: 'post' | 'edit'; // 신규 혹은 수정 여부 체크
    currentUid?: string; // 수정할 경우 해당 uid
}

export const ModalEditor = ({ ...props }: ModalEditorProps) => {
    /* edit 상태일 경우 gql로 쿼리 실행 */

    // 리코일 상태
    const [editorState, setEditorState] = useRecoilState(noticeEditorStateAtom);
    // 모달이 처음 열릴때 초기값 저장
    const initialValueRef = React.useRef('');

    // 프로퍼티 mode 와 open 상태가 변경될 때 상태관리
    React.useEffect(() => {
        if (props.open) {
            if (props.mode === 'post') {
                // Post 등록 이벤트일 경우 모든 값 초기화
                setEditorState({
                    uid: '',
                    uploader: '',
                    uploadDate: new Date(),
                    postState: 'private',
                    title: '',
                    context: '',
                    category: 'all', // 나중에 select 로 지정하도록 하기
                    imageUrls: [],
                    isNew: true,
                });
                initialValueRef.current = ''; // 등록이벤트 경우 빈값
            } else {
                // edit 이벤트일 경우 초기값 설정
                initialValueRef.current = editorState.context; // 초기값 리코일에 받아온걸로
            }
        }
    }, [props.open, props.mode]);

    // 에디터 제목 입력 이벤트
    const handleTitlechange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEditorState((prev) => ({
            // 리코일 상태 갱신
            ...prev,
            title: e.target.value,
        }));
    }, []);
    // 에디터 입력 이벤트
    const handleEditorChange = React.useCallback((content: string) => {
        setEditorState((prev) => ({
            // 리코일 상태 갱신
            ...prev,
            context: content,
        }));
    }, []);
    // 제목 영역 컴포넌트
    const titleArea = props.requireTitle && (
        <Box className={clsN(styles.paper__input)}>
            <Input
                fullWidth
                type="text"
                label="제목을 입력해주세요"
                variant="filled"
                inputVal={editorState.title}
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
                    <TinyEditorBasicComponent
                        initialValue={props.mode === 'post' ? '' : editorState.context}
                        onEditorChange={handleEditorChange}
                    />
                    <ButtonGroup rootPaperClsN={clsN(styles['paper__button-group'])} buttonItems={props.buttonItems} />
                </Box>
            </Stack>
        </Modal>
    );
};
