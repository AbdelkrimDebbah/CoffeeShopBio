const con = require('../../model/db_connection.js')
const jwt = require('jsonwebtoken');

function getInfosUsersController(req, res) {

    const token = req.headers.authorization;
    const decoded = jwt.decode(token, { complete: false })
  

    //console.log(decoded)
    let insert = "SELECT id, username, role, email, adresse FROM users;"
 
    if (decoded.role === 'admin')

    con.query(insert, (error, results, fields) => {
       if (error)
       //throw error;
       {
          return console.error(error.message);
       }
       return res.json(results)
       
    });
 
 
 }
 module.exports = getInfosUsersController

