module.exports = {
  root: true,
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'semi': 'off',
    'react/prop-types': 'off',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening': 'never',
      'beforeClosing': 'allow',
    }],
    'react/jsx-filename-extension': ['error', {
      'extensions': [
        '.jsx',
        '.js',
      ],
    }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
