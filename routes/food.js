var express = require('express')
var path = require('path')

var app = express()

var testData = {
    "breakfast": ["toast", "pancakes", "cornflakes", "banana", "porridge"],
    "lunch": ["hotdogs", "burgers", "toasties", "pie", "salad"],
    "dinner": ["butter chicken", "pasta", "soup", "tacos", "mac 'n cheese"]
}

app.get('/', function (req, res) {
  res.send(testData);
});

app.get('/:category', function (req, res) {
  var foodCategory = req.params.category
  res.send(testData[foodCategory]);
});


app.post('/:category', function (req, res) {
  var foodCategory = req.params.category
  console.log( req.body)
  testData[foodCategory].push(req.body.foodName)
  res.redirect('/food/' + foodCategory)
});

app.get('/:category/add', function (req, res) {
  var foodCategory = req.params.category
  res.render('add', req.params)
});


module.exports = app
