module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
  },
  extends: [
    'plugin:prettier/recommended', //add prettier plugin
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
  },
};
