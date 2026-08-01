import { defineConfig, globalIgnores } from 'eslint/config';
import next from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default defineConfig([
    globalIgnores(['.next/**', 'build/**', 'next-env.d.ts', 'node_modules/**', 'out/**']),
    next,
    nextTypescript,
    {
        settings: {
            react: { version: '19.2' },
        },
        rules: {
            '@next/next/no-page-custom-font': 'warn',
            'react/no-unescaped-entities': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
]);
