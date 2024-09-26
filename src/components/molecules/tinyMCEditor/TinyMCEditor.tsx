import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

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
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={(content, editor) => {
                props.onChange(content);
                console.log(editor);
            }}
        />
    );
};
