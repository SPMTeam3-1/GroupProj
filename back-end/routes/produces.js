var express = require('express');
var producesRouter = express.Router();
var connection = require('./utils')

/* GET all produces info. */
producesRouter.get('/', function (req, res) {
    connection.connect(err => {
        connection.query(`SELECT * FROM product`, (err, rows) => {
            if (err) throw err;
            res.json({
                status: '200',
                products: rows
            })
        })
    })
});

module.exports = producesRouter;