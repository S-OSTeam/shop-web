import { EditorConfig } from '@ckeditor/ckeditor5-core';

export const deafultConfig: Partial<EditorConfig> = {
    language: 'ko',
    toolbar: {
        items: [
            'undo',
            'redo',
            '|',
            'heading',
            '|',
            'bold',
            'italic',
            '|',
            'link',
            'uploadImage',
            'insertTable',
            '|',
            'bulletedList',
            'numberedList',
        ],
    },
};
