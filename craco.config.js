const CracoAlias = require('craco-alias');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // 웹팩콘픽.모듈.규칙을 순회하면서 .svg 파일을 찾아 저장
            const svgRule = webpackConfig.module.rules.find((rule) => rule.test && rule.test.test('.svg')) || {};
            // 찾은 test 속성에서 .svg 파일만 정확히 찾도록 매치함
            svgRule.exclude = /\.svg$/i; // SVG 파일을 기존 규칙에서 제외

            // svg 로더
            const svgLoader = {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            throwIfNamespace: false,
                            svgoConfig: {
                                plugins: [
                                    {
                                        name: 'preset-default',
                                        params: {
                                            overrides: {
                                                convertShapeToPath: false,
                                                removeViewBox: false,
                                            },
                                        },
                                    },
                                    'prefixIds',
                                    {
                                        name: 'removeAttrs',
                                        params: {
                                            attrs: ['data-name', 'sketch:type'],
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            };
            // 웹팩 설정 rule 새 규칙 추가
            webpackConfig.module.rules.push(svgLoader);

            return webpackConfig;
        },
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './src',
                tsConfigPath: './tsconfig.json',
            },
        },
    ],
    devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
};
