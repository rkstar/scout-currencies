const path = require('path');

module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["import", "prettier", "react-hooks", "babel"],
  parser: "babel-eslint",
  env: { browser: true },
  parserOptions: { ecmaVersion: 8, sourceType: "module" },
  rules: {
    "function-paren-newline": ["off", "never"], // turn this off
    "no-extra-parens": 0, // Interferes with jsx
    "no-underscore-dangle": 0, // Mongo _id
    "no-mixed-operators": "error",
    "no-unexpected-multiline": "off",
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
    "no-param-reassign": [2, { props: false }], // Allows assignment of new properties
    "no-confusing-arrow": 0,
    "no-nested-ternary": 1,
    "new-cap": 0, // We don't have control over external dependecies using this
    "object-curly-spacing": "error",
    "function-paren-newline": "off",
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": "off",
    "import/extensions": ["off", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/require-default-props": 0,
    "react/prop-types": 1,
    "react/destructuring-assignment": 1,
    "react/forbid-prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "prettier/prettier": ["error", {
      "trailingComma": "all",
      "singleQuote": true,
      "printWidth": 80,
      "jsxIgnoreLineBreak": true
    }],
  },
  globals: {
    describe: "readonly",
    it: "readonly",
    expect: "readonly"
  }
};
