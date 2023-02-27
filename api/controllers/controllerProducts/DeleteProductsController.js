const bcrypt = require('bcrypt');
const e = require('express');
const jwt = require('jsonwebtoken');
const { userInfo } = require('os');
const { decode } = require('punycode');
const con = require('../../model/db_connection.js')


function DeleteProductsController(req, res) {

  const token = req.headers.authorization;
  const decoded = jwt.decode(token, { complete: false })
  //console.log(decoded)
  //const hash = bcrypt.hashSync(req.body.password, 8);

  //Delete product

  const query = `SELECT user_id FROM products WHERE id = ${req.params.productId}`
  con.query(query, (error, results, fields) => {
    // console.log(results[0].user_id)
    // console.log(decoded.Id)
   
    //check if user is admin or product_owner
    if (decoded.role === 'admin' || results[0].user_id === decoded.Id) {

      let query = `DELETE FROM products WHERE id= ${req.params.productId}`;
      con.query(query, (error, results, fields) => {
        if (error)
        //throw error;
        {
          return console.error(error.message);
        }

        return res.json({ message: "Product deleted" });

      });
    
    } 
    else {
      return res.status(403).json({ message: "forbidden" });
 
    }

  })

}
module.exports = DeleteProductsController;
