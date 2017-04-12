module.exports = {
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
