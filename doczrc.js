module.exports = {
  codeSandbox: false,
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', { loader: 'css-loader', options: { modules: true } }]
    })
    return config
  },
  themeConfig: {
    showPlaygroundEditor: true
  }
}
