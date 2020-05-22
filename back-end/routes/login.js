var express = require('express');
var loginRouter = express.Router();

/* GET home page. */
loginRouter.post('/', function(req, res) {
    if(req.body.username === 'asdf' && req.body.password === 'zxcv') {
        res.json({status: '200'})
    }
});

loginRouter.delete('/endSession', function(req, res) {
    /* delete the current session */
})

module.exports = loginRouter;
