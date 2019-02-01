module.exports = {
  codeSandbox: false,
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    })
    return config
  },
  themeConfig: {
    showPlaygroundEditor: true
  }
}
