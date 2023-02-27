const check = require('../../middlewares/CheckUserMiddleware')
const con = require('../../model/db_connection.js')

// pour encoder ou comparer le mot de passe
const bcrypt = require('bcrypt');




function registerUserController(req, res) {
   const hash = bcrypt.hashSync(req.body.password, 8);
   let insert = `INSERT INTO users(username, password, role, email, adresse) VALUES ('${req.body.username}', '${hash}', 'user', '${req.body.email}', '${req.body.adresse}');`
   
   
   con.query(insert, (error, results, fields) => {
      if (error)
      //throw error;
      {
         return console.error(error.message);
      }
      return res.json({ message: "user inserted" })
   });
   }
   
// }

module.exports = registerUserController