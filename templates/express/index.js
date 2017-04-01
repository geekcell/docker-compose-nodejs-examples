const express = require('express');
const app = express();

// Configure Mustache templates
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Connect routers
app.use(require('./site/router'));

const port = 3000;

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
