module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'plugin:react/jsx-runtime': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-undef': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-nonoctal-decimal-escape': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'func-names': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    camelcase: 'off',
  },
};
