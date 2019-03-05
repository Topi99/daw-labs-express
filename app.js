require('dotenv').config()

const express         = require('express');
const { home, backend } = require('./routes');
const sassMiddleware  = require('node-sass-middleware');
const path            = require('path');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const db              = require('./models');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed'
}), express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', home);
app.use('/', backend);

const port=process.env.PORT || 3000

db.sequelize.sync().then(function() {
  app.listen(port, () => console.log('hi', port));
});
