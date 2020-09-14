module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'elemefe',
  globals: {
    __static: true,
    VUE_ELECTRON: true  //因 fs 问题添加
  },
  plugins: [
    'html'
  ],
  // extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],

  // plugins: ['vue', 'prettier','html'],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
