const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const babelConfig = require('./babel.config')

module.exports = {
  mode: 'production',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'classnames',
      root: '_'
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { ...babelConfig }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ],
  stats: 'errors-only'
}
