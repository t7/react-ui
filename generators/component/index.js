const SRC_DIR = 'generators/component/templates'
const DEST_DIR = 'packages/{{dashCase name}}'

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Add a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component Name? (ex. Button, PrimaryButton, etc.)'
    }],
    actions: [
      {
        type: 'add',
        path: `${DEST_DIR}/src/index.js`,
        templateFile: `${SRC_DIR}/src/index.js.hbs`
      },
      {
        type: 'add',
        path: `${DEST_DIR}/src/index.mdx`,
        templateFile: `${SRC_DIR}/src/index.mdx.hbs`
      },
      {
        type: 'add',
        path: `${DEST_DIR}/src/index.spec.js`,
        templateFile: `${SRC_DIR}/src/index.spec.js.hbs`
      },
      {
        type: 'add',
        path: `${DEST_DIR}/package.json`,
        templateFile: `${SRC_DIR}/package.json.hbs`
      }
    ]
  })
}
