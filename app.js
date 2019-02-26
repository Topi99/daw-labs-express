const express = require('express');
const { home, lab11 } = require('./routes');

const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use('/', home);
app.use('/', lab11);

app.listen(3000, () => console.log('hi'));