module.exports = {
  env: {
    node: true,
    es2021: true
  },
  plugins: ["node", "security", "import", "prettier"],
  extends: [
    "airbnb-base",
    "plugin:node/recommended",
    "plugin:security/recommended",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "comma-dangle": ["error", "never"],
    semi: ["error", "always"]
  }
};
