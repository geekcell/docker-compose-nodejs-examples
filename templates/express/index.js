const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const app = express();

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Configure Pug templates
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// initialize database
database.init();

// Connect routers
app.use(require('./site/router'));
app.use('/api', require('./api/router'));

const port = 3000;

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
