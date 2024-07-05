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
};
