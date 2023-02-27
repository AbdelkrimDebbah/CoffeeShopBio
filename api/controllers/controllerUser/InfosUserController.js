const jwt = require('jsonwebtoken');
const con = require('../../model/db_connection.js')


function getInfosUserController(req, res) {

   const decoded = jwt.decode(req.headers.authorization, { complete: false })
   //console.log(decoded)
   let insert = `SELECT id, username, role, email, adresse FROM users WHERE id = ${decoded.Id};`;

   con.query(insert, (error, results, fields) => {
      if (error)
      //throw error;
      {
         return console.error(error.message);
      }
      return res.json(results[0])
   });


}
module.exports = getInfosUserController
