require("dotenv").config();
var connection = require('./utils')

var express = require('express');
var loginRouter = express.Router();

/* GET home page. */
loginRouter.post('/', function(req, res) {
    let authenticPassword;
    let requestUsername = req.body.username
    let requestPassword = req.body.password
    
    connection.connect(err => {
        connection.query(`SELECT password FROM user WHERE email=\'${requestUsername}\';`, (err, rows, fields) => {
            if (err) console.log(err);
            if (rows.length > 0) {
                authenticPassword = rows[0].password
    
                if(requestPassword === authenticPassword) {
                    res.json({status: '200'})
                }
            }
        })
    });
});



loginRouter.delete('/endSession', function(req, res) {
    /* delete the current session */

})

module.exports = loginRouter;
