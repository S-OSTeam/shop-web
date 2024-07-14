import { Input } from '@atoms/input/Input';
import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line storybook/story-exports

const meta = {
    // @ts-ignore
    component: Input,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Atoms/Input',
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        variant: undefined,
        name: 'Basic',
        label: 'text',
    },
};
