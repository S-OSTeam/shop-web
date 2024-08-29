const CracoAlias = require('craco-alias');

module.exports = {
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
    webpack: {
        configure: (webpackConfig) => {
            // CKEditor 아이콘을 위한 규칙 (raw-loader 사용)
            const ckeditorIconsRule = {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: ['raw-loader'],
            };

            // CKEditor SVG 파일을 위한 규칙 (네임스페이스가 있는 SVG 파일 포함)
            const ckeditorSvgRule = {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.svg$/,
                use: ['raw-loader'], // CKEditor의 모든 SVG 파일을 raw-loader로 처리
            };

            // 모든 다른 SVG 파일에 대한 규칙
            const svgRule = {
                test: /\.svg$/,
                exclude: [
                    /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                    /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.svg$/, // CKEditor 관련 SVG 파일 제외
                ],
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            throwIfNamespace: false, // 네임스페이스 허용 옵션
                        },
                    },
                    'file-loader',
                ],
            };

            // CKEditor와 관련된 파일들을 맨 앞에 배치하여 우선 처리
            webpackConfig.module.rules.unshift(ckeditorIconsRule, ckeditorSvgRule, svgRule);

            return webpackConfig;
        },
    },
};
