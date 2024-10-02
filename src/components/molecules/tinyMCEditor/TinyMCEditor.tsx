import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce/tinymce';
import 'tinymce/plugins/image';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/models/dom';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/content/default/content.min.css';

interface TinyMCEditorProps {
    initialValue?: string;
    onChange: (content: string) => void;
    value?: string;
}

export const TinyMCEditor = ({ ...props }: TinyMCEditorProps) => {
    return (
        <Editor
            apiKey="2ytbg9c286hwtryfv7iu4rvn04njqcp774sxz01zja5bwmjo"
            initialValue={props.initialValue}
            value={props.value}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                    'undo redo | formatselect | link image | code ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                file_picker_types: 'image',
                /**
                 *
                 * @param cb 콜백함수 : 파일이 선택되었을때 호출, 선택된 파일의 URL과 파일에 대한 정보를 TinyMCE 에 전달
                 * @param value 문자열 : 현재 필드의 값
                 * @param meta 객체 : 현재 입력 필드에 대한 추가 정보를 포함, 예) meta.filetype 는 요청된 파일 유형을 나타냄('image', 'media')
                 */
                file_picker_callback: (cb) => {
                    const fileIPT = document.createElement('input');
                    fileIPT.setAttribute('type', 'file');
                    fileIPT.setAttribute('accept', 'image/*');

                    fileIPT.onchange = (event: Event) => {
                        // 파일 타겟
                        const target = event.target as HTMLInputElement;
                        // 타겟에 파일이 존재하고 길이가 0보다 클경우
                        if (target.files && target.files.length > 0) {
                            const file = target.files[0];
                            // 리더
                            const reader = new FileReader();
                            // 리더.result 의 타입 체크 후 읽기 준비 완료
                            reader.onload = () => {
                                const id = `blobid${new Date().getTime()}`; // 아이디
                                const blobCache = tinymce.activeEditor?.editorUpload.blobCache; // 캐시
                                // result 타입 체크
                                const { result } = reader;
                                let base64 = '';
                                if (typeof result === 'string') {
                                    // eslint 구조 분해할당 0, 1번째로 base64 배열 생성
                                    [, base64] = result.split(',');
                                }
                                // 캐시와 파일이 존재할경우
                                if (blobCache && file) {
                                    const blobInfo = blobCache?.create(id, file, base64);
                                    blobCache?.add(blobInfo);
                                    cb(blobInfo?.blobUri(), { title: file.name }); // callBack 매서드
                                }
                            };
                            reader.readAsDataURL(file);
                        }
                    };
                    fileIPT.click();
                },
                images_upload_handler: (blobInfo) =>
                    new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            const base64 = reader.result;
                            if (base64) resolve(base64.toString());
                        };

                        reader.readAsDataURL(blobInfo.blob());
                    }),
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={(content, editor) => {
                props.onChange(content);
                console.log(editor);
            }}
        />
    );
};
