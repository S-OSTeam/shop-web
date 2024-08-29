/* eslint-disable */
import React from 'react';
import { Stack } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { AutoComplete } from '@molecules/autoComplete/AutoComplete';
import { CustomCKEditor } from '@organisms/ckEditor/CKEditor';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

interface FaqProps {
    className?: string;
}

export const Faq = ({ ...props }: FaqProps) => {
    /* 상태 */
    // 실행 준비 여부
    const [isReady, setIsReady] = React.useState(true);

    // 에디터 ref 요소 접근
    // 현재 DOM 에 접근한 에디터 요소 참조
    // TODO : editor: unknown 말고 고민하기
    const editorRef = React.useRef<{ editor: ClassicEditor | null }>({ editor: null });

    /* 변수 */
    /** AutoComplete > option 속성 변수 */
    const optionsCont = [
        { label: 'one', number: 1 },
        { label: 'two', number: 2 },
        { label: 'the', number: 3 },
    ];
    // 한번만 마운트되고 에디터 초기화 이벤트
    React.useEffect(() => {
        setIsReady(true);
        return () => {
            // 에디터 인스턴스를 제거
            if (editorRef.current.editor) {
                editorRef.current.editor.destroy().catch((error: Error) => alert(`destory editor Instance : ${error}`));
            }
        };
    }, []);

    /* 함수 */
    // ckEditor 입력 이벤트
    const handleEditorChange = (data: string) => {
        console.log(`Editor content : ${data}`);
    };
    /* TSX */
    /** Faq 헤드라인 컴포넌트 */
    const headline = <Heading heading="(FAQ)자주묻는 질문" subtitle1="자주 묻는 질문과 답변을 확인해 보세요" />;

    /* 렌더 */
    return (
        <Stack>
            {headline}
            <CustomCKEditor
                isReady={isReady}
                editorRef={editorRef}
                initialData="write Here"
                onChange={handleEditorChange}
                editorConfig={{}}
            />
            <AutoComplete options={optionsCont} freeSolo />
        </Stack>
    );
};
