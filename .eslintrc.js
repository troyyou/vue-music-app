// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0,
    'space-before-function-paren': 0,
    'indent': 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        'baseIndent': 1
      }
    ],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "never"
      },
      "svg": "always",
      "math": "always"
    }],
    "no-trailing-spaces": [
      2,
      {
        "skipBlankLines": true
      }
    ],
    'vue/name-casing': [
      'camelCase'|'kebab-case'|'PascalCase'
    ],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 8
    }]
  }
}
