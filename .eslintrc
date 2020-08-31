{
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "prettier/flowtype",
    "plugin:testing-library/recommended"
  ],
  "plugins": ["react", "prettier", "testing-library"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": [
      "error"
    ],
    "react/jsx-no-bind": [
      "error",
      {
        "allowArrowFunctions": true,
        "allowFunctions": false,
        "allowBind": false
      }
    ],
    "react/forbid-prop-types": 0,
    "no-console": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["to"]
      }
    ],
    "react/default-props-match-prop-types": 0,
    "prefer-promise-reject-errors": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "jest": true
  }
}
