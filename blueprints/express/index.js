const express = require('express');
const bodyParser = require('body-parser');
const bootstrap = require('./bootstrap');
const app = express();

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Configure Pug templates
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Serve static files
app.use(express.static('public'));

// Custom bootstrapping (database etc.)
return bootstrap(app)
  .then(app => {

    // Connect routers
    app.use(require('./site/router'));
    app.use('/api', require('./api/router'));

    const port = 3000;

    app.listen(port, () => {
      console.log(`Express app listening on port ${port}`);
    });
  })
  .catch(err => {
    throw err;
  })
;
