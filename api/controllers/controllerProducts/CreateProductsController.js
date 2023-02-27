const con = require('../../model/db_connection.js');
const jwt = require('jsonwebtoken');

function CreateProductsController(req, res) {
  
   const token = req.headers.authorization;
  //console.log(token);
  
  const decoded = jwt.decode(token, { complete: false });
  //console.log("useris = " + decoded.Id);
  
  let insert = `INSERT INTO products (name, price, user_id, link) VALUES ('${req.body.name}', '${req.body.price}', '${decoded.Id}', '${req.body.link}');`
    //console.log(insert);
   con.query(insert, (error, results, fields) => {
      if (error)
      //throw error;
      {
         return console.error(error.message);
      }
      return res.json({ message: "product created" })
   });
   
   

}
module.exports = CreateProductsController;