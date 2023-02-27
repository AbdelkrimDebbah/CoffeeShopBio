const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const con = require('../../model/db_connection.js')


function DeleteUserController(req, res) {

  const token = req.headers.authorization;
  const decoded = jwt.decode(token, { complete: false })
  //console.log(decoded)
  
  //Delete user
  let query = `DELETE FROM users WHERE id= ${req.params.user_id}`;

  // check if user is admin or user connected
  if (decoded.role === 'admin' || decoded.Id == req.params.user_id) {


    con.query(query, (error, results, fields) => {
      if (error)
      //throw error;
      {
        return console.error(error.message);
      }

      return res.status(200).json({ message: "User deleted" });
    });
  } else {
    return res.status(403).json({ message: "delete user forbidden" });
  }
}


module.exports = DeleteUserController;
