// Checking if user exists
const con = require('../model/db_connection.js')

function checkUserMiddleware(req, res, next) {
    con.connect(function (err) {
        //if (err) throw err;

        if (!req.body.username) {

            return res.status(400).json({ message: "missing username" })
        }
        else {
            con.query(`SELECT * FROM users WHERE username =  '${req.body.username}'`, function (error, result, fields) {

                if (error) throw error;

                if (result.toString() !== '') {
                    //result = -1;

                    res.json({ message: "User exists" })
                    return -1;

                }
                else next();

            });
        }
    });

}

module.exports = checkUserMiddleware;