export default (global) => {

  global.Promise = global.Promise || require('promise-polyfill');
  global.fetch = global.fetch || require('whatwg-fetch');

};
