/* Vérif du token */
const jwt = require('jsonwebtoken')
const SECRET = 'kkkkkeeeeesssss'


const checkTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization
    // Présence du token
    if (!token) {
        return res.status(401).json({ message: 'Error token absent' })
    }
    // verif du token
    jwt.verify(token, SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Error token' })
        } else {
            return next()
        }
    })
}
module.exports = checkTokenMiddleware;