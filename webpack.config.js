const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const babelConfig = require('./babel.config')

module.exports = {
  mode: 'production',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: 'commonjs react'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
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
  stats: {
    modules: false
  }
}
