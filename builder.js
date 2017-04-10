const fs = require('fs-promise');
const path = require('path');
const Mustache = require('mustache');
const glob = require('glob-promise');
const uniq = require('lodash.uniq');
const chalk = require('chalk');

const error = chalk.bold.red;

const logError = message => console.error(error(`Error: ${message}`));

const copyTemplate = src => (dest = __dirname + '/build') => {
  return fs
    .access(dest, fs.constants.W_OK)
    .then(
      () => fs.remove(dest),
      err => {
        if ('ENOENT' === err.code) {
          return
        }

        if ('EACCES' === err.code) {
          logError(`No write access for ${dest}`);
        }

        throw err;
      }
    )
    .then(() => fs.copy(src, dest))
  ;
};

const moduleMappings = {
  minimal  : {deps: [], devDeps: ['nodemon']},
  express  : {
    deps: [
      'body-parser',
      'express',
      'lodash.find',
      'pug',
    ],
    devDeps: [
      'nodemon'
    ]
  },
  mysql    : {deps: ['mysql'], devDeps: []},
  postgres : {deps: ['pg'], devDeps: []},
  mongodb  : {deps: ['mongoose'], devDeps: []},
  es6      : {deps: [], devDeps: ['babel-cli', 'babel-preset-env']},
  react    : {
    deps: [
      'react',
      'react-dom',
      'redux',
      'react-redux'
    ],
    devDeps: [
      'babel-preset-env',
      'babel-preset-es2015',
      'babel-preset-react',
      'redux-devtools'
    ],
  },
  vue      : {
    deps: [
      'vue'
    ],
    devDeps: [
      'babel-cli',
      'babel-preset-vue-app'
    ]
  },
  make     : {
    deps: [], 
    devDeps: [
      'babelify',
      'browserify',
      'watchify'
    ]
  },
  gulp     : {deps: [], devDeps: ['gulp']},
  webpack  : {deps: [], devDeps: ['webpack']}
};

const determineNodeModules = (answers = {}) => {
  const temp = Object
    .keys(answers)
    .reduce((acc, key) => {
      const value = answers[key];
      if (!value) {
        return acc;
      }

      return {
        deps: uniq(acc.deps.concat(moduleMappings[value].deps)),
        devDeps: uniq(acc.devDeps.concat(moduleMappings[value].devDeps)),
      }
    }, {deps: [], devDeps: []}
  );

  return {
    deps: temp.deps.join(' '),
    devDeps: temp.devDeps.join(' ')
  }
}

const generateCommonTemplates = answers => (dest = `${__dirname}/build`) => {
  const modules = determineNodeModules(answers);
  const templateContext = Object.assign({}, answers, modules);

  return glob(`${__dirname}/templates/common/**/*.mustache`)
    .then(files => {
      const promises = files.map(file => {
        const relativePath = path.relative(`${__dirname}/templates/common`, file.replace('\.mustache', ''));
        const destPath = `${dest}/${relativePath}`;

        return fs
          .ensureDir(path.dirname(destPath))
          .then(() => fs.readFile(file))
          .then(buf => Mustache.render(buf.toString('utf-8'), templateContext))
          .then(output => fs.writeFile(destPath, output))
        ;
      })

      return Promise.all(promises);
    })
    .then(() => glob(`${dest}/docker/**/*`))
    .then(files => {
      const promises = files.map((file) => fs.chmod(file, 0751));

      return Promise.all(promises);
    })
    .then(() => undefined)
  ;
};

const prepareDatabase = answers => (dest = `${__dirname}/build`) => {
  if (!answers.database) {
    return Promise.resolve();
  }

  return fs
    .copy(`${__dirname}/templates/${answers.database}`, dest)
    .then(() => undefined)
  ;
};

const prepareFancyFrontend = answers => (dest = `${__dirname}/build`) => {
  if (!answers.fancyFrontend) {
    return Promise.resolve();
  }

  return fs
    .copy(`${__dirname}/templates/${answers.fancyFrontend}`, dest)
    .then(() => undefined)
  ;
};

const prepareBuildTool = answers => (dest = `${__dirname}/build`) => {
  if (!answers.buildTool) {
    return Promise.resolve();
  }

  return fs
    .copy(`${__dirname}/templates/${answers.buildTool}`, dest)
    .then(() => undefined)
  ;
};

const builder = answers => ({
  copyTemplate: copyTemplate(`${__dirname}/templates/${answers.skeleton}`),
  generateCommonTemplates: generateCommonTemplates(answers),
  prepareDatabase: prepareDatabase(answers),
  prepareFancyFrontend: prepareFancyFrontend(answers),
  prepareBuildTool: prepareBuildTool(answers)
});

module.exports = builder;
