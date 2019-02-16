const path = require('path')

const cssLoaders = (modules = false, sass = false) => {
  return ([
    'style-loader',
    {
      loader: 'css-loader',
      options: { modules }
    },
    'postcss-loader',
    ...(sass ? ['sass-loader'] : [])
  ])
}

module.exports = {
  base: '/react-ui/',
  codeSandbox: false,
  dest: 'docs',
  hashRouter: true,
  modifyBundlerConfig: (config) => {
    // Absolute imports.
    config.resolve.modules = [
      'node_modules',
      path.resolve(__dirname),
      path.resolve(__dirname, 'src')
    ]

    // CSS with modules.
    config.module.rules.push({ test: /\.module\.css$/, use: cssLoaders(true, false) })

    // CSS without modules.
    config.module.rules.push({ test: /(?<!module)\.css$/, use: cssLoaders(false, false) })

    // SCSS with modules.
    config.module.rules.push({ test: /\.module\.scss$/, use: cssLoaders(true, true) })

    // SCSS without modules.
    config.module.rules.push({ test: /(?<!module)\.scss$/, use: cssLoaders(false, true) })

    return config
  },
  title: '@t7/react-ui',
  theme: 'src/index.js',
  themeConfig: {
    showPlaygroundEditor: true
  }
}
