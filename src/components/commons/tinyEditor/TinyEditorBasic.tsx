import React from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Editor } from '@tinymce/tinymce-react';
import { plugins, toolbar } from '@util/tinyMCE/tinyEditorPlugins.init';

interface TinyEditorBasicProps {
    initialValue?: string;
    value?: string; // 에디터 입력값
    onEditorChange: (content: string, editor: TinyMCEEditor) => void;
}

export const TinyEditorBasicComponent = React.memo(({ initialValue, value, onEditorChange }: TinyEditorBasicProps) => {
    // 에디터 레퍼런스
    const editorRef = React.useRef<TinyMCEEditor | null>(null);
    // 에디터가 처음 마운트되었는지 초기화 체크
    const [initialized, setInitialized] = React.useState(false);

    // 에디터 초기 실행 이벤트
    const handleEditorInit = (_: unknown, editor: TinyMCEEditor) => {
        editorRef.current = editor;
        setInitialized(true); // 에디터 준비완료 설정
    };

    // 에디터 콘텐츠 초기값 설정
    // 최초로 렌더할 경우 initialValue 을 사용 그리고 마운트됬다면 초기화를 했으므로 props.value
    const currentValue = initialized ? value : initialValue;

    return (
        <Editor
            apiKey="2ytbg9c286hwtryfv7iu4rvn04njqcp774sxz01zja5bwmjo"
            onInit={handleEditorInit}
            value={currentValue}
            init={{
                height: 500,
                menubar: false,
                plugins: [...plugins],
                toolbar: [...toolbar],
                automatic_uploads: true, // 드래그앤 드롭 설정
                /*
                 URL of our upload hander
                */
                file_picker_types: 'image', // 파일선택기 : 이미지만 허용
                /*
                * 사용자 정의 파일 선택기 : 이미지 삽입 버튼을 클릭할 경우 실행
                1. 파일 입력 요소를 생성하고 클릭 이벤트를 작동시킴
                2. 사용자가 파일을 선택할 경우 해당 파일을 읽어 base64 인코딩된 데이터 URL 로 변환
                3. 에디터의 대형 이진 객체인 blobCache 에 이미지를 등록
                4. 콜백 함수를 호출하여 에디터에 이미지를 삽입
                */
                file_picker_callback: (cb) => {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/*');
                    input.addEventListener('change', (e: Event) => {
                        const target = e.target as HTMLInputElement; // 현재 선택할 파일
                        // 파일
                        const file = target.files?.[0];
                        // 타입체크 에러 방지
                        if (file) {
                            const reader = new FileReader(); // 리더기
                            reader.addEventListener('load', () => {
                                const id = `blobid${new Date().getTime()}`;
                                const blobCache = editorRef.current?.editorUpload.blobCache;
                                const base64 = (reader.result as string).split(',')[1];

                                // 타입체크
                                if (blobCache) {
                                    const blobInfo = blobCache.create(id, file, base64);
                                    blobCache.add(blobInfo);
                                    cb(blobInfo.blobUri(), { title: file.name });
                                }
                            });
                            reader.readAsDataURL(file);
                        }
                    });
                    input.click();
                },
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={onEditorChange}
        />
    );
});
