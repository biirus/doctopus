// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  extends: ['eslint:recommended', 'plugin:tailwindcss/recommended'],
  plugins: ['lodash', 'tailwindcss'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'plugin:tailwindcss/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:prettier/recommended', // Prettier plugin
        'next',
      ],
      rules: {
        // Includes .prettierrc.js rules
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],

        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/no-onchange': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

        // force to use self-closing tags for empty components
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],

        'no-useless-escape': 'off',
        'no-nested-ternary': 'error',

        'lodash/import-scope': [2, 'method'],
      },
    },
  ],
}
