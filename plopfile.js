module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'generates a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name the component',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/components/{{properCase name}}/styles.js',
        templateFile: 'templates/components/styles.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/components/{{properCase name}}/index.js',
        templateFile: 'templates/components/index.js',
      },
    ],
  })
  plop.setGenerator('screen', {
    description: 'generates a screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name the component',
        validate(value) {
          return (/.+/).test(value) ? true : 'name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{properCase name}}/styles.js',
        templateFile: 'templates/screens/styles.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{properCase name}}/view.js',
        templateFile: 'templates/screens/view.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{properCase name}}/container.js',
        templateFile: 'templates/screens/container.js',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/screens/{{properCase name}}/index.js',
        templateFile: 'templates/screens/index.js',
      },
    ],
  })
}
