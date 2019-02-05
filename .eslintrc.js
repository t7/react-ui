module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'standard-react'
  ],
  globals: {
    afterAll: true,
    afterEach: true,
    beforeAll: true,
    beforeEach: true,
    describe: true,
    expect: true,
    it: true,
    jasmine: true,
    jest: true,
    jsdom: true,
    spyOn: true
  },
  rules: {
    'arrow-body-style': [
      'error',
      'always'
    ],
    'arrow-parens': [
      'error',
      'always'
    ],
    'func-style': [
      'error',
      'expression'
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error'
        ]
      }
    ],
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ]
  }
}
