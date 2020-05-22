var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
    console.log('111')
  res.send('A test for data retrieval from backend');
});

// indexRouter.post('login', function(req, res, next) {
//     res.send(req)
// })
module.exports = indexRouter;
