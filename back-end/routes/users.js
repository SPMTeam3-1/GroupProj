var express = require('express');
var usersRouter = express.Router();
var connection = require('./utils')

/* GET users listing. */

usersRouter.get('/:id', (req, res, next) => {
    const userId = req.params.id;
    let user;

    connection.connect(err => {
        connection.query(`SELECT * FROM user WHERE id=${userId};`, (err, rows, fields) => {
            if (err) console.log(err);
            if (rows.length > 0) {
                user = rows[0];
                res.json({
                    status: '200',
                    user
                })
            }
        })
    })
});


usersRouter.put('/:id', function (req, res, next) {
    const userId = req.params.id
    connection.connect(err => {
        const userInfo = {
            name: req.body.name,
            address_1: req.body.address_1,
            address_2: req.body.address_2,
            city: req.body.city,
            state: req.body.state,
            postcode: req.body.postcode,
            mobile: req.body.mobile,
            home: req.body.home,
            work: req.body.work,
            email: req.body.email
        }

        connection.query(`UPDATE user
                          SET name=\'${userInfo.name}\',
                          address_1=\'${userInfo.address_1}\',
                          address_2=\'${userInfo.address_2}\',
                          city=\'${userInfo.city}\',
                          state=\'${userInfo.state}\',
                          postcode=\'${userInfo.postcode}\',
                          mobile=\'${userInfo.mobile}\',
                          home=\'${userInfo.home}\',
                          work=\'${userInfo.work}\',
                          email=\'${userInfo.email}\'
                          WHERE id=${userId};`, (err, rows, fields) => {
            if (err) throw err;
            res.json({
                status: '200'
            })
        })
    })
});

module.exports = usersRouter;