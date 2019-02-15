module.exports = {
  base: '/react-ui/',
  codeSandbox: false,
  dest: 'docs',
  hashRouter: true,
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    })
    return config
  },
  title: '@t7/react-ui',
  themeConfig: {
    showPlaygroundEditor: true
  }
}
