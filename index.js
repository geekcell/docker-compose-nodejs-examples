const inquirer = require('inquirer');
const chalk = require('chalk');
const builder = require('./builder');

const askForSkeleton = {
  name: 'skeleton',
  message: 'Which type of Node.js app?',
  type: 'list',
  choices: [
    {name: 'Minimal', value: 'minimal'},
    {name: 'Express.js', value: 'express'}
  ],
};

const askForDatabase = {
  name: 'database',
  message: 'Which Database do you want to use?',
  type: 'list',
  choices: [
    {name: 'None', value: null},
    {name: 'MySQL', value: 'mysql'},
    {name: 'PostgreSQL', value: 'postgres'},
    {name: 'MongoDB', value: 'mongodb'}
  ],
  when: (currentAnswers) => {
    const { skeleton } = currentAnswers;
    if (!!skeleton && 'minimal' === skeleton) {
      return false;
    }

    return true;
  }
};

const askForFancyFrontend = {
  name: 'fancyFrontend',
  message: 'Do you want a fancy front end?',
  type: 'list',
  choices: [
    {name: 'God no!', value: null},
    {name: 'Babel/ES6', value: 'es6'},
    {name: 'React/Redux', value: 'react'},
    {name: 'Vue.js', value: 'vue'}
  ],
  when: (currentAnswers) => {
    const { skeleton } = currentAnswers;
    if (!!skeleton && 'minimal' === skeleton) {
      return false;
    }

    return true;
  }
};

const askForBuildTool = {
  name: 'buildTool',
  message: 'How do you want to build your front end?',
  type: 'list',
  choices: [
    {name: 'Makefile', value: 'make'},
    {name: 'Gulp.js', value: 'gulp'},
    {name: 'Webpack', value: 'webpack'}
  ],
  when: (currentAnswers) => {
    const { skeleton, fancyFrontend } = currentAnswers;
    if ((!!skeleton && 'minimal' === skeleton) || !fancyFrontend) {
      return false;
    }

    return true;
  }
}

inquirer
  .prompt([
    askForSkeleton,
    askForDatabase,
    askForFancyFrontend,
    askForBuildTool
  ])
  .then((answers) => {
    const b = builder(answers);
    return b
      .copyTemplate()
      .then(b.generateCommonTemplates)
      .then(b.prepareDatabase)
      .then(() => {
          console.log(chalk.green.bold('\nAlright! Your app of choice is ready 🎉'));
          console.log(`Please run ${chalk.green.bold('cd build; ./docker/install')} to install dependencies`);
          console.log(`When done, run ${chalk.green.bold('docker-compose up')} to launch your app`);
      })
    ;
  })
;
