var express = require('express');
var producesRouter = express.Router();

/* GET all produces info. */
producesRouter.get('/all', function(req, res) {
  res.send('Information about each produce received from the database');
});

module.exports = producesRouter;