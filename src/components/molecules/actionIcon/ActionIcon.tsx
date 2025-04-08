import React from 'react';
import clsN from 'classnames';
import styles from './styles/ActionIcon.module.scss';

interface ActionIconProps {
    // file Index Id
    id?: string | number;
    // input Reference
    inputRef?: React.Ref<HTMLInputElement> | ((el: HTMLInputElement | null) => void);
    // allowed FileType
    accept?: string;
    // styles
    style?: React.CSSProperties;
    // Image Upload Call Back Event
    onImageLoad?: (imageUrl: string, id?: string | number) => void;
    // Component Root className
    className?: string;
    // Component Visibility
    disabled?: boolean;
}

export const ActionIcon = ({ id, inputRef, accept, style, onImageLoad, className, disabled }: ActionIconProps) => {
    // file Change Handler
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // new FileReader Obj : creates the filereader
            const reader = new FileReader();
            reader.onload = (e) => {
                // file select phase
                const imageUrl = e.target?.result as string;
                if (onImageLoad) {
                    // if has CallBack fcn
                    onImageLoad(imageUrl, id); // call back
                }
            };
            // encode as URL
            reader.readAsDataURL(file);
        }
        // eslint-disable-next-line no-param-reassign
        event.target.value = ''; // reset value of event (event: input)
    };

    return (
        <input
            className={clsN(className, styles['action-input'])}
            disabled={disabled}
            type="file"
            accept={accept}
            style={style}
            ref={inputRef as React.Ref<HTMLInputElement>}
            onChange={handleFileChange}
        />
    );
};
