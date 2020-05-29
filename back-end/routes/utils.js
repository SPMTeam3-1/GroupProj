var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '951202',
    database: 'JJFresh'
});

module.exports = connection