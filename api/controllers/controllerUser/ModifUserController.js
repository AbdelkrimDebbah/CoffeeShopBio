const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const con = require('../../model/db_connection.js')


function ModifUserController(req, res) {

	const token = req.headers.authorization;
	const decoded = jwt.decode(token, { complete: false })
	//console.log(decoded)
	//const hash = bcrypt.hashSync(req.body.password, 8);

	//enter news info users
	let query = `UPDATE users SET 
				
				 username='${req.body.username}', 
				 email='${req.body.email}', 
				 adresse='${req.body.adresse}' 
				 WHERE id= ${decoded.Id};`;

	//check if user is admin
	//   if (decoded.role == 'admin') {
	//
	if (decoded.role === 'admin' || decoded.Id == req.params.user_id) {


		con.query(query, (error, results, fields) => {
			if (error)
			//throw error;
			{
				return console.error(error.message);
			}

			return res.json({ message: "Update valid" });
		});
	} else {
		return res.status(403).json({ message: "Update forbidden" });
	}
}

module.exports = ModifUserController;





