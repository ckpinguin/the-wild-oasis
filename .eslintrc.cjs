module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  overrides: [
    {
      files: [],
      env: {
        jest: true,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "no-unused-vars": "error",
    "react/jsx-no-leaked-render": 1,
    "react/jsx-max-depth": [1, { max: 3 }],
    "react/destructuring-assignment": 2,
    "react/no-unstable-nested-components": 2,
    "react/jsx-no-useless-fragment": 2,
    "react/jsx-fragments": 2,
    "react/no-children-prop": 2,
    "react/no-array-index-key": 2,
    "react/button-has-type": 1,
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 1,
    "react/display-name": 2,
    "react/jsx-no-bind": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowExportNames: ["meta", "links", "headers", "loader", "action"] },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        ignoreRestSiblings: true,
      },
    ],
  },
}
