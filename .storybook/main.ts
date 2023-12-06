import type { StorybookConfig } from '@storybook/react-webpack5';

const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const config: StorybookConfig = {
    // storybook 이 인식하는 스토리 파일의 경로를 설정
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    // 애드온: 보조플러그인 추가
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
    ],
    // 스토리북이 사용하는 프레임워크 설정
    framework:{
        // 리액트 웹팩5를 쓰고있으므로 storybook/...5 사용
        name: '@storybook/react-webpack5',
        // 옵션
        options:{},
    },
    // 스토리북에서 자동 생성되는 문서 설정
    docs: {
        // tag 기능 활성
        autodocs: 'tag',
    },
    // Storybook 웹팩 설정을 수정(커스텀)
    webpackFinal: (config) => {
        // config.resolve 해당 객체가 존재하면 사용 아닌경우 빈 객체 할당
        config.resolve = config.resolve || {};
        // 모듈을 검색할 경로를 설정(node_modules, styles)
        config.resolve.modules =[
            path.resolve(__dirname, '..'),
            'node_modules',
            'styles',
        ];
        // 별칭설정 이로인해 import 가 더 수월해짐
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, '../src/components'),
            '@assets': path.resolve(__dirname, '../src/assets'),
        };
        // tsconfig-paths-webpack-plugin 설정 추가를 위해 배열로 초기화함
        // 웹팩 모듈을 해석하는 방식을 확장해줌, tsconfig-paths-webpack-plugin 을 사용
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsConfigPathPlugin(),
        ];
        return config;
    },
    // 정적 파일이 위치한 디렉토리를 설정함
    staticDirs: ['..\\public'],
};
export default config;
