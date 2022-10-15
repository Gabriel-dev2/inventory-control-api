const { verify } = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = function(req, res, next) {
    const token = req.headers['authorization'].substr(7);

    if (!token) return res.status(400).send(['Token is required']);

    verify(token, process.env.SECRET, (err, decoded)=> {
        if (err) return res.status(400).send(['Token is invalid']);

        req.user_id = decoded.id;
        next();
    })
}

module.exports = verifyJWT;