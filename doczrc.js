module.exports = {
  codeSandbox: false,
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    })
    return config
  },
  themeConfig: {
    showPlaygroundEditor: true
  }
}
