import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';

export default [
    js.configs.recommended,
    nextPlugin.configs['core-web-vitals'],
    {
        plugins: {
            react: reactPlugin,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/no-unescaped-entities': 'off',
            '@next/next/no-page-custom-font': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
