var express = require('express');
var morgan = require('morgan');
var db = require('./db');
var cors = require('cors');
var barberRouter = require('./barber/barber.router');
var app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/me', barberRouter);

app.get('/', function (req, res) {
  console.log(res);
  res.json({ message: 'Welcome to the Barber-MongoDB ' });
});

var PORT = 3001;

app.listen(PORT, function () {
  console.log('barber-MongoDB  listening on http://localhost:' + PORT);
});
