import React from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';

export const tinyMCEUtil = (editorRef: React.MutableRefObject<TinyMCEEditor | null>) => {
    const content = editorRef.current?.getContent();
    console.log('HTML Storage : ', content);
    // TODO : 서버로 전송하기
};
