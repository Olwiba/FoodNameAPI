var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

var testData = {
    "breakfast": ["toast", "pancakes", "cornflakes", "banana", "porridge"],
    "lunch": ["hotdogs", "burgers", "toasties", "pie", "salad"],
    "dinner": ["butter chicken", "pasta", "soup", "tacos", "mac 'n cheese"]
}

app.get('/', function (req, res) {
  res.send(testData);
});

app.get('/:class', function (req, res) {
  var foodClass = req.params.class
  res.send(testData[foodClass]);
});

app.get('/:class/add', function (req, res) {
  var foodClass = req.params.class
  res.render('add')
  // res.send(testData['breakfast']);
});


module.exports = app
