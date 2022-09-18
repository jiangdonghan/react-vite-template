const rules = {
  'prettier/prettier': 'error',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/camelcase': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/no-use-before-define': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/class-name-casing': 'off',
  '@typescript-eslint/no-parameter-properties': 'off',
  '@typescript-eslint/no-object-literal-type-assertion': 'off',
  '@typescript-eslint/no-this-alias': 'off',
  '@typescript-eslint/no-inferrable-types': [
    'error',
    { ignoreProperties: true },
  ],
  semi: ['off'],
  'no-console': ['error', { allow: ['error', 'info'] }],
  'no-empty': 'off',
  'require-atomic-updates': 'off',
}

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: null,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:react/jsx-runtime',
  ],
  rules: Object.assign(
    {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react/display-name': 'off',
    },
    rules
  ),
  settings: {
    react: {
      version: 'detect',
    },
  },
}
