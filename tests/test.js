var request = require('supertest')
var test = require('tape')

var app = require('../app.js')
var food = require('../routes/food.js')

test('This is testing the breakfast query..', function(t) {
  var expectedFoods = ["toast", "pancakes", "cornflakes", "banana", "porridge"]

  request(food)
    .get('/breakfast')
    .expect('Content-Type', /json/)   // supertest provides some special API testing tools to check headers
    .expect(200)                      // and status codes easily
    .end(function(err, res){          // it allows us the catch the response
      if (err) throw err;
      t.equals(typeof res.body, 'object', 'Breakfast returns an object')
      t.equals(JSON.stringify(res.body), JSON.stringify(expectedFoods), 'Breakfast is giving back breakfast foods! ')
      t.end()
    })
})

test('This is testing the lunch query..', function(t) {
  var expectedFoods = ["hotdogs", "burgers", "toasties", "pie", "salad"]

  request(food)
    .get('/lunch')
    .expect('Content-Type', /json/)   // supertest provides some special API testing tools to check headers
    .expect(200)                      // and status codes easily
    .end(function(err, res){          // it allows us the catch the response
      if (err) throw err;
      t.equals(typeof res.body, 'object', 'Lunch returns an object')
      t.equals(JSON.stringify(res.body), JSON.stringify(expectedFoods), 'Lunch is giving back lunch foods! ')
      t.end()
    })
})

test('This is testing the dinner query..', function(t) {
  var expectedFoods = ["butter chicken", "pasta", "soup", "tacos", "mac 'n cheese"]

  request(food)
    .get('/dinner')
    .expect('Content-Type', /json/)   // supertest provides some special API testing tools to check headers
    .expect(200)                      // and status codes easily
    .end(function(err, res){          // it allows us the catch the response
      if (err) throw err;
      t.equals(typeof res.body, 'object', 'Dinner returns an object')
      t.equals(JSON.stringify(res.body), JSON.stringify(expectedFoods), 'Dinner is giving back dinner foods! ')
      t.end()
    })
})
