module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
      },
    ],
    'react/prop-types': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'func-names': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-restricted-imports': 0,
    'prettier/prettier': ['error', { bracketSpacing: true }],
    'react/jsx-no-bind': 2,
    'no-empty-function': 0,
    'no-extra-semi': 0,
    'no-console': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react-?'], ['^@?react-?'], ['^@?\\w']],
      },
    ],
  },
}
