const con = require('../../model/db_connection.js');
const jwt = require('jsonwebtoken');

function ListProductsController(req, res) {
  //const token = req.headers.authorization;
  //const decoded = jwt.decode(token, { complete: false });
  let insert = `SELECT * FROM products`;

    con.query(insert, (error, results, fields) => {
      //throw error;
      if (error){
        return console.error(error.message);
      }
      //console.log(results);
      return res.json(results);
    });
    
  }


module.exports = ListProductsController;