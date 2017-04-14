const fs = require('fs');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { createStore, applyMiddleware } = require('redux');
const { Provider } = require('react-redux');

let thunk = require('redux-thunk');
let CommentsApp = require('./assets/javascripts/components/comments/App');
let reducer = require('./assets/javascripts/reducers');

const database = require('./database');

thunk = thunk.default;
CommentsApp = CommentsApp.default;
reducer = reducer.default;

const renderReactAppToFile = (comments) => new Promise((resolve, reject) => {
  const store = createStore(reducer, { comments }, applyMiddleware(thunk));

  const html = renderToString(
    <Provider store={store}>
      <CommentsApp/>
    </Provider>
  );

  fs.writeFile('./views/includes/comments.pug', html, err => {
    if (err) {
      return reject(err);
    }

    return resolve();
  });
});

const bootstrap = (app) => {
  return database
    .init()
    .then(database.getPosts)
    .then(renderReactAppToFile)
    .then(() => app)
  ;
}

module.exports = bootstrap;
