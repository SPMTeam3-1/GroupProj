var express = require('express');
var ordersRouter = express.Router();

/* GET home page. */
ordersRouter.get('/all', function(req, res, next) {
  res.send('the order list data retrieved from the database');
});

ordersRouter.post('/', function(req, res) {
    /* create new order */
})

ordersRouter.get('/:id', function(req, res) {
    /* getting single order by id */
})

ordersRouter.update('/:id', function(req, res) {
    /* delete an order */
    /* or */
    /* complete an order */
    /* Our assumption here is we can see all the past orders, cancelled orders and active orders listing.
})

/**
 * order statuses:
 * - pending
 * - delivered
 * - cancelled
 */

module.exports = ordersRouter;