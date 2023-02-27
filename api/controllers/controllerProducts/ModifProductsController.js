const con = require('../../model/db_connection.js');
const jwt = require('jsonwebtoken');

function ModifProductsController(req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.decode(token, { complete: false });
  //console.log(decoded);
  
  
  let query = `SELECT user_id FROM products WHERE id= ${req.params.productId};`;
  con.query(query, (error, results, fields) => {
    if (decoded.role == 'admin' || results[0].user_id === decoded.Id) {

      let query = `UPDATE products SET name='${req.body.name}', price='${req.body.price}', link='${req.body.link}' WHERE id= ${req.params.productId};`;
      con.query(query, (error, results, fields) => {
        if (error)
        //throw error;
        {
          return console.error(error.message);
        }

        return res.json({ message: "Product modified" });

      });
    
    } 
    else {
      return res.status(403).json({ message: "forbidden" });
 
    }

  })

}
module.exports = ModifProductsController;