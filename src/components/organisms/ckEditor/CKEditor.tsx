import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EventInfo } from '@ckeditor/ckeditor5-utils';
import { EditorConfig } from '@ckeditor/ckeditor5-core';
// 한글 버전
import '@ckeditor/ckeditor5-alignment/build/translations/ko';
import '@ckeditor/ckeditor5-build-classic/build/translations/ko';
import { deafultConfig } from '@util/ckEditor/ckEditor.config';

import clsN from 'classnames';
import styles from './styles/Editor.module.scss';

interface CustomCKEditorProps {
    initialData?: string; // 초기 데이터
    onChange?: (data: string) => void; // 입력 이벤트
    editorConfig?: Partial<EditorConfig>; // 에디터 설정
    isReady: boolean; // 부모에서 상태 체크
    editorRef: React.MutableRefObject<{ editor: ClassicEditor | null }>;
}

export const CustomCKEditor = ({ ...props }: CustomCKEditorProps) => {
    const mergedConfig = { ...deafultConfig, ...props.editorConfig };
    const currentRef = props.editorRef;
    return (
        <div className={clsN('ckeditor-organism', styles.root)}>
            {props.isReady && (
                <CKEditor
                    editor={ClassicEditor}
                    config={mergedConfig}
                    data={props.initialData}
                    onReady={(editor: ClassicEditor) => {
                        currentRef.current.editor = editor;
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event: EventInfo, editor: ClassicEditor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        if (props.onChange) props.onChange(data);
                    }}
                />
            )}
        </div>
    );
};
