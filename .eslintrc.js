module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  plugins: [
    'node',
    'security',
    'import',
    'prettier'
  ],
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    "sourceType": "module"
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'comma-dangle': ['error', 'always'],
    semi: ['error', 'always']
  },
};
