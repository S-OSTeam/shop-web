import CustomText from '@atoms/text/Text';
import type {Meta, StoryObj} from '@storybook/react';

const meta:Meta<typeof CustomText> = {
    // @ts-ignore
    component: CustomText,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof CustomText>;

export const Text:Story ={
    args:{
        text: 'textElement',
        align: 'left',
        className: 'defaultText',
    },
};
export const HeadingText:Story = {
    args:{
        text: 'HeadingTag.1',
        className: 'h1Element',
        variant: 'h1',
    },
};