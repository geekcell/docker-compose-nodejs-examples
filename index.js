const inquirer = require('inquirer');
const chalk = require('chalk');
const builder = require('./builder');
const questions = require('./questions')

const logError = message => console.error(chalk.red.bold(`Error: ${message}`));

return inquirer
  .prompt([
    questions.askForSkeleton,
    questions.askForDatabase,
    questions.askForFancyFrontend,
    questions.askForBuildTool
  ])
  .then(builder.build)
  .then(buildDir => {
    console.log(chalk.green.bold('\nAlright! Your app of choice is ready 🎉'));
    console.log(`Please run ${chalk.green.bold(`cd ${buildDir}; make`)} to install, build and launch.`);
  })
  .catch(err => logError(err.message))
;
