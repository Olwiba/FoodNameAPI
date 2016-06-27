var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var food = require('./routes/food')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/food', food)
app.set('view engine', 'hbs')
app.set('views path', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
