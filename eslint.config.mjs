import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import next from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default defineConfig([
    globalIgnores(['.next/**', 'out/**', 'build/**', 'node_modules/**', 'next-env.d.ts']),
    js.configs.recommended,
    next,
    nextTypescript,
    {
        settings: {
            react: { version: '19.2' },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/no-unescaped-entities': 'off',
            '@next/next/no-page-custom-font': 'warn',
        },
    },
]);
