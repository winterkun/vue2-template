module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'prettier/prettier': ['error', { tabWidth: 4 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index'] //需要忽略的组件名
            }
        ],
        curly: ['error', 'all'],
        'comma-dangle': ['error', 'only-multiline'],
        camelcase: ['warn', { properties: 'never' }],
        indent: ['warn', 4, { SwitchCase: 1 }],
        'no-unused-vars': 'off',
        'vue/no-unused-components': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'space-infix-ops': ['error', { int32Hint: false }],
        'no-alert': 'error',
        'no-dupe-args': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'error'
    }
}
