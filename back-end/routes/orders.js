var express = require("express");
var ordersRouter = express.Router();
var connection = require('./utils')

var nodemailer = require('../mailing_services/nodemailer')

/* GET home page. */

ordersRouter.get('/all', function(req, res, next) {
    connection.connect(err => {
        connection.query(`SELECT * FROM order;`, (err, rows) => {
            if (err) throw err;
            res.json({
                status: '200',
                orders: rows})
        })
    })
});

ordersRouter.post('/', function(req, res) {
    /* create new order */
    /* check the date time */
    const proposedDeliveryTime = req.body.deliveryTime;
    connection.connect(err => {
        connection.query(`SELECT * FROM product_order WHERE delivery_time=\`${proposedDeliveryTime};`, (err, rows) => {
            if (err) throw err;
            
            if (rows.length < 2) {
                connection.query(`INSERT INTO product_order (size, status, delivery_time, user_id, product_id)
                VALUES (\'${req.body.size, req.body.status, req.body.deliveryTime, req.body.userId, req.body.productId}\');`, (err, rows) => {
                    if (err) throw err;

                    // nodemailer();
                    res.json({
                        status: '200'
                    })
                })
            } else {
                res.json({status: 'not_ok'})
            }
        })
    })
})

ordersRouter.delete('/:id', (req, res) => {
    const orderId = req.params.id

    connection.connect(err => {
        connection.query(`UPDATE product_order
                            SET status=\'cancelled\'
                            WHERE no=\'${orderId}\';`, (err, rows) => {
                                if (err) throw err;
                                // nodemailer();
                                res.json({status: '200'})
                            })
    })
})

// get all orders of one user id
ordersRouter.get('/:id', function(req, res) {
    const userId = req.params.id;

    connection.connect(err => {
        connection.query(`SELECT * FROM product_order WHERE id=${userId};`, (err, rows) => {
            if (err) throw err;
            res.json({
                status: '200',
                orders: rows})
        })
    })

})


/**
 * order statuses:
 * - pending
 * - delivered
 * - cancelled
 */

module.exports = ordersRouter;
