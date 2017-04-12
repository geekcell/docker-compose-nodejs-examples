const fs = require('fs-promise');
const path = require('path');
const Mustache = require('mustache');
const glob = require('glob-promise');
const uniqid = require('uniqid');
const uniq = require('lodash.uniq');
const modules = require('./modules');

const determineNodeModules = (context, modules) => {
  const temp = Object
    .keys(context)
    .reduce((acc, key) => {
      const value = context[key];
      if (!value) {
        return acc;
      }

      return {
        deps: uniq(acc.deps.concat(modules[value].deps)),
        devDeps: uniq(acc.devDeps.concat(modules[value].devDeps)),
      }
    }, {deps: [], devDeps: []}
  );

  return {
    deps: temp.deps.join(' '),
    devDeps: temp.devDeps.join(' ')
  }
};

const compileTemplates = (context, src, opts = {}) => {
  const options = Object.assign({
    deleteAfterCompilation: true
  }, opts);

  return glob(src + '/**/*.mustache')
    .then(files => {
      const promises = files.map(file => {
        return fs
          .readFile(file)
          .then(buf => Mustache.render(buf.toString('utf-8'), context))
          .then(output => fs.writeFile(file.replace('\.mustache', ''), output))
          .then(() => {
            if (options.deleteAfterCompilation) {
              return fs.remove(file);
            }
          })
        ;
      });

      return Promise.all(promises);
    })
  ;
};

const build = (ctx, dest = './build') => {
  const choices = Object
    .keys(ctx)
    .map(key => ctx[key])
    .filter(choice => !!choice)
  ;
  const realDest = `./build/${choices.join('-')}`;
  const tempDest = uniqid(realDest + '-');

  const [skeleton, ...rest] = choices;
  const remaining = Array.isArray(rest) ? rest.concat('common') : [rest, 'common'];

  const context = Object.assign(ctx, determineNodeModules(ctx, modules));

  return fs
    .emptyDir(dest)
    .then(() => fs.ensureDir(tempDest))
    .then(() => fs.copy(`./blueprints/${skeleton}`, tempDest))
    .then(() => {
      const promises = remaining
        .map(choice => fs.copy(`./blueprints/${choice}`, tempDest))
      ;

      return Promise.all(promises);
    })
    .then(() => compileTemplates(context, tempDest))
    .then(() => fs.move(tempDest, realDest))
    .then(() => realDest)
  ;
}

module.exports = {
  build,
  determineNodeModules,
  compileTemplates
};
