import React from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Editor } from '@tinymce/tinymce-react';

interface TinyEditorBasicProps {
    editorRef: React.MutableRefObject<TinyMCEEditor | null>;
    initialValue?: string;
    onChange: (content: string) => void;
}

export const TinyEditorBasic = ({ editorRef, initialValue, onChange }: TinyEditorBasicProps) => {
    const editorParam = editorRef;
    return (
        <Editor
            apiKey="2ytbg9c286hwtryfv7iu4rvn04njqcp774sxz01zja5bwmjo"
            onInit={(evt, editor) => {
                editorParam.current = editor;
            }}
            initialValue={initialValue}
            onEditorChange={(content) => {
                onChange?.(content);
            }}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount',
                ],
                toolbar:
                    'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | link image ' +
                    'removeformat | help',
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
        />
    );
};
