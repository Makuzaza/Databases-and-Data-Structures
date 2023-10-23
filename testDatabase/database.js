const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root',
    password: '',
    database: 'testdbreact23s',
});

connection.connect ();

connection.query(`select * from tasks`, (error, results, fields) => {
    if (error) {
        return console.log(error);
    } else {
        return console.log(results);
    }
});

connection.end;