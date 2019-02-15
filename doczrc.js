module.exports = {
  base: '/react-ui/',
  codeSandbox: false,
  dest: 'docs',
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
