var mysql = require('mysql2');
require('dotenv').config();

// console.log(process.env.MYSQL_DATABASE);
// console.log(process.env.MYSQL_USER);
// console.log(process.env.MYSQL_ROOT_PASSWORD);

var con = mysql.createConnection({
  host: process.env.MYSQL_DBHOST, 
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
  
});







module.exports = con;

