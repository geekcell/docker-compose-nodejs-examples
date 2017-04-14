const database = require('./database');

const bootstrap = (app) => database.init().then(() => app);

module.exports = bootstrap;
