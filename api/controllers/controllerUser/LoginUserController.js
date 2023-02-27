const con = require('../../model/db_connection.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'kkkkkeeeeesssss'


function loginUserController(req, res) {

	let insert = `SELECT * FROM users WHERE username='${req.body.username}'`
	//console.log(insert);
	con.query(insert, (error, results, fields) => {
		//console.log(results)
		if (results.length === 0) {
			console.log('user unknown');
			return res.status(404).json({ message: "user unknown" })
		};

		if (!bcrypt.compareSync(req.body.password, results[0].password))
			return res.status(401).json({ message: "wrong password" })
		const token = jwt.sign({
			Id: results[0].id,
			username: results[0].username,
			role: results[0].role
		}, SECRET, { expiresIn: '3 hours' });
		res.status(200).json({ access_token: token, role: results[0].role });

	})

}
module.exports = loginUserController