const express = require('express');
const { home, lab11 } = require('./routes');

const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use('/', home);
app.use('/', lab11);

const port=process.env.PORT || 3000

app.listen(port, () => console.log('hi', port));