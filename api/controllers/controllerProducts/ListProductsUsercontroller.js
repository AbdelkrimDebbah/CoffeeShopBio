const con = require('../../model/db_connection.js');
const jwt = require('jsonwebtoken');

function ListProductsUserController(req, res) {

	let insert = `SELECT * FROM products WHERE user_id = ${req.params.userId}`;

	con.query(insert, (error, results, fields) => {
		if (error)

		//throw error;
		{
			return console.error(error.message);
		}
		//console.log(results);
		return res.json(results);
	});
}


module.exports = ListProductsUserController;