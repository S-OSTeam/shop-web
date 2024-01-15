import Icon from '@atoms/source/icon/Icon';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// 스토리북으로 확인할 컴포넌트 불러옴
import styles from '@atoms/source/icon/style/Icon.module.scss';
import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line storybook/story-exports
type Story = StoryObj<typeof Icon>;

const meta = {
    title: 'Components/Atoms/Source/Icon',
    component: Icon,
    tags: ['autodocs'],
} as Meta<typeof Icon>;
export default meta;

export const Inherit: Story = {
    args: {
        // eslint-disable-next-line react/react-in-jsx-scope
        icon: <AccountBoxIcon />,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        variant: 'inherit',
        className: `${styles.icon}`,
    },
};
export const Large: Story = {
    args: {
        // eslint-disable-next-line react/react-in-jsx-scope
        icon: <AccountBoxIcon />,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        variant: 'large',
    },
};
export const Medium: Story = {
    args: {
        // eslint-disable-next-line react/react-in-jsx-scope
        icon: <AccountBoxIcon />,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        variant: 'medium',
    },
};
export const Small: Story = {
    args: {
        // eslint-disable-next-line react/react-in-jsx-scope
        icon: <AccountBoxIcon />,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        variant: 'small',
    },
};
