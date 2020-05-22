var express = require('express');
var usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('all users data retrieved from database');
});

module.exports = usersRouter;
