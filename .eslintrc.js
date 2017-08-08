module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "window": true,
    "document": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }],
    "arrow-parens": 0,
    "class-methods-use-this": 0,
    "compat/compat": 2,
    "comma-dangle": 0,
    "consistent-return": 2,
    "func-names": 2,
    "generator-star-spacing": [0],
    "import/no-extraneous-dependencies": ["off"],
    "import/extensions": 0,
    "import/no-unresolved": 2,
    "new-cap": 0,
    "no-implicit-coercion": "error",
    "no-mixed-operators": 0,
    "no-plusplus": 0,
    "no-use-before-define": 0,
    "no-nested-ternary": 0,
    "no-underscore-dangle": 0,
    "no-var": "error",
    "semi": ["error", "always"],
    "promise/param-names": 2,
    "promise/always-return": 2,
    "promise/catch-or-return": 2,
    "promise/no-native": 0
  },
  "plugins": [
    "compat",
    "import",
    "promise"
  ]
};
