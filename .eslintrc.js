module.exports = {
  "env": {
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "json-format"
  ],
  "rules": {
    "max-len": ["error", { "code": 120, "comments": 120}],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.spec.ts",
          "**/__test__/**"
        ]
      }
    ],
    "arrow-body-style": ["off"],
    "no-underscore-dangle": ["off"],
    "no-continue": ["off"],
    "no-restricted-syntax": ["off"],
    "import/prefer-default-export": ["off"],
    "@typescript-eslint/no-use-before-define": ["off"],
    "class-methods-use-this": ["off"]
  },
  "settings": {
    "json/sort-package-json": "standard",
    "json/ignore-files": [
      ".vscode/**"
    ],
    "import/resolver": {
      "node": {
        "extensions": [".ts"],
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  }
}
