module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'import', 'unused-imports', 'jsx-a11y'],
    extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
        'plugin:storybook/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    rules: {
        camelcase: 'off',
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'prettier/prettier': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        'import/no-unresolved': 0,
        'react/no-unescaped-entities': 0,
        'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        'no-shadow': 0,
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/require-default-props': 'warn',
        'global-require': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-dynamic-require': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
            },
        ],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        'jsx-a11y/mouse-events-have-key-events': [
            'error',
            {
                hoverInHandlers: ['onMouseOver', 'onMouseEnter', 'onPointerOver', 'onPointerEnter'],
                hoverOutHandlers: ['onMouseOut', 'onMouseLeave', 'onPointerOut', 'onPointerLeave'],
            },
        ],
    },
    settings: {
        'jsx-a11y': {
            polymorphicPropName: 'as',
            components: {
                CityInput: 'input',
                CustomButton: 'button',
                MyButton: 'button',
                RoundButton: 'button',
            },
        },
    },
    overrides: [
        {
            // or whatever matches stories specified in .storybook/main.js
            files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
            rules: {
                // example of overriding a rule
                'storybook/hierarchy-separator': 'error',
                // example of disabling a rule
                'storybook/default-exports': 'off',
            },
        },
    ],
};
