module.exports = {
  codeSandbox: false,
  dest: 'dist',
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    })
    return config
  },
  title: '@t7/components',
  themeConfig: {
    showPlaygroundEditor: true
  }
}
