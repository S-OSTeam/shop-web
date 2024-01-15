import styles from '@atoms/text/style/text.module.scss';
import Text from './Text';
// 스토리북으로 확인할 컴포넌트 불러옴
import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line storybook/story-exports
type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
    title: 'Components/Atoms/Text',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const H1: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        text: 'H1',
        align: 'center',
        variant: 'h1',
        className: `${styles.text}`,
    },
};
export const H2: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        text: 'H2',
        align: 'center',
        variant: 'h2',
        className: `${styles.text}`,
    },
};
export const H3: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        text: 'H3',
        align: 'center',
        variant: 'h3',
        className: `${styles.text}`,
    },
};
export const H4: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        text: 'H4',
        align: 'center',
        variant: 'h4',
        className: `${styles.text}`,
    },
};
export const H5: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        text: 'H5',
        align: 'center',
        variant: 'h5',
        className: `${styles.text}`,
    },
};
export const H6: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        text: 'H6',
        align: 'center',
        variant: 'h6',
        className: `${styles.text}`,
    },
};
export const Body1: Story = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        text: 'Body1',
        align: 'center',
        variant: 'Body1',
        className: `${styles.text}`,
    },
};
