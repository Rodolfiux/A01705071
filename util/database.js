const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'limoneras',
    password: '',
});

module.exports = pool.promise();