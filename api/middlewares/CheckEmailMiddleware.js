// Checking if email exists
const con = require('../model/db_connection.js')

function checkEmailMiddleware(req, res, next) {
    con.connect(function (err) {
        //if (err) throw err;
        if (!req.body.email)
            return res.status(400).json({ message: "missing email" })
        else {
            con.query(`SELECT * FROM users WHERE email =  '${req.body.email}'`, function (error, result, fields) {

                if (error) throw error;

                if (result.toString() !== '') {
                    //result = -1;
                    console.log(result.toString());
                    res.json({ message: "Email exists" })
                    return -1;

                }
                 next();

            });
        }
    });

}

module.exports = checkEmailMiddleware;