import React, { ChangeEvent, ReactElement } from 'react';
import { Box, FormControl, Input, InputLabel, TextField } from '@mui/material';

interface myDefaultInputProps {
    id?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    ph?: string;
    label?: string;
    className?: string;
    value?: string;
    onChange?: () => void;
}

export const InputElement = ({ ...props }: myDefaultInputProps) => {
    return (
        <TextField
            required
            id={props.id}
            variant={props.variant}
            placeholder={props.ph}
            className={props.className}
            value={props.value}
            onChange={props.onChange}
        />
    );
};

interface MyFormProps {
    thisClassName: string;
    thisHtmlFor: string;
    thisFormSubmit: () => void;

    children: {
        innerInputType?: '';
        InnerInputId: string;
        innerLabelHtmlFor: string;
        innerLabelContent?: string;
        innerPh?: string;
        onChange: (e: ChangeEvent<HTMLInputElement | HTMLLIElement>) => void;
        isTextArea?: true | false;
    };
}

export const MyTextArea = ({ ...props }: MyFormProps) => {
    const inputMultipleGenerator = (check: boolean | undefined) => {
        check = props.children.isTextArea;
        if (check) {
            return (
                <TextField
                    id={props.children.InnerInputId}
                    label={props.children.innerLabelContent}
                    multiline
                    defaultValue={props.children.innerPh}
                />
            );
        } else {
            <Input />;
        }
    };
    return (
        <FormControl className={props.thisClassName}>
            <InputLabel htmlFor={props.children.innerLabelHtmlFor} />
        </FormControl>
    );
};
