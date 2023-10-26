// replace youre-framework with the framework you ar using
import type { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {

        },
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
    ],
    docs: {
        autodocs: 'tag',
    },
    staticDirs: ['..\\public'],
};
export default config;
