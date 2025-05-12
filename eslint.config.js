import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
    includeIgnoreFile(gitignorePath),
    {
        ignores: ['**/vendor/*.js', '**/components/icons/*'],
        files: ['.vue', '.js', '.jsx', '.cjs', '.mjs'],
    },
    ...pluginVue.configs['flat/essential'],
    ...pluginVue.configs['flat/recommended'],
    ...pluginVue.configs['flat/strongly-recommended'],
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },

        rules: {
            'no-console':
                process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger':
                process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'vue/valid-v-slot': [0],

            'vue/order-in-components': [
                'error',
                {
                    order: [
                        'name',
                        'components',
                        'props',
                        'data',
                        'methods',
                        'watch',
                        'computed',
                        'LIFECYCLE_HOOKS',
                    ],
                },
            ],

            'vue/multi-word-component-names': 0,

            semi: [
                'error',
                'always',
                {
                    omitLastInOneLineBlock: true,
                },
            ],

            quotes: [
                'error',
                'single',
                {
                    allowTemplateLiterals: true,
                },
            ],

            'no-trailing-spaces': ['error'],
            'no-tabs': ['error'],

            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxEOF: 1,
                },
            ],

            'eol-last': ['error', 'always'],
            'vue/html-quotes': ['error', 'double'],

            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: {
                        max: 1,
                    },

                    multiline: {
                        max: 1,
                    },
                },
            ],

            'vue/attributes-order': [
                'error',
                {
                    order: [
                        'DEFINITION',
                        'CONDITIONALS',
                        'LIST_RENDERING',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        ['UNIQUE', 'SLOT'],
                        'TWO_WAY_BINDING',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT',
                    ],

                    alphabetical: false,
                },
            ],

            'vue/script-indent': ['error', 4],
            'vue/html-indent': ['error', 4],

            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'never',
                        normal: 'never',
                        component: 'never',
                    },
                },
            ],

            'vue/first-attribute-linebreak': ['error'],
            'vue/html-closing-bracket-newline': ['error'],
            'vue/mustache-interpolation-spacing': ['error'],
            'vue/multiline-html-element-content-newline': ['error'],
            'vue/v-slot-style': ['warn'],
            'vue/v-bind-style': ['warn'],
            'vue/attribute-hyphenation': ['error'],
            'vue/require-default-prop': ['off'],
            'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
            'vue/space-unary-ops': ['error'],
            'vue/space-infix-ops': ['error'],
            eqeqeq: ['error', 'always'],

            'vue/no-irregular-whitespace': [
                'error',
                {
                    skipStrings: true,
                    skipComments: false,
                    skipRegExps: false,
                    skipTemplates: false,
                    skipHTMLAttributeValues: false,
                    skipHTMLTextContents: false,
                },
            ],

            'vue/html-end-tags': ['error'],
        },
    },
    eslintPluginPrettierRecommended,
];
