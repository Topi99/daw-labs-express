const express         = require('express');
const { home, lab11 } = require('./routes');
const sassMiddleware  = require('node-sass-middleware');
const path            = require('path');
const logger       = require('morgan');
const bodyParser      = require('body-parser');

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
app.use('/', lab11);

const port=process.env.PORT || 3000

app.listen(port, () => console.log('hi', port));