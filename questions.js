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

const askForPolyfills = {
  name: 'polyfills',
  message: 'Do yo want polyfills for older browsers?',
  type: 'list',
  choices: [
    {name: 'No, f**k \'em!', value: null},
    {name: 'Yes, please.', value: 'polyfills'}
  ],
  when: (currentAnswers) => {
    const { skeleton, fancyFrontend } = currentAnswers;
    if ((!!skeleton && 'minimal' === skeleton) || !fancyFrontend) {
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

module.exports = {
  askForSkeleton,
  askForDatabase,
  askForFancyFrontend,
  askForPolyfills,
  askForBuildTool
};
