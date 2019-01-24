const execa = require('execa')
const path = require('path')

const componentGenerator = require('./generators/component')

module.exports = (plop) => {
  // Add actions.
  plop.setActionType('install', async (data, config, plop) => {
    const packageRoot = path.resolve(
      plop.getDestBasePath(),
      plop.renderString(config.path || '', Object.assign({}, config.data, data))
    )
    try {
      await execa.shell('npm install', { cwd: packageRoot })
      return 'Installed package dependencies'
    } catch (error) {
      throw error
    }
  })

  // Add generators.
  componentGenerator(plop)
}
