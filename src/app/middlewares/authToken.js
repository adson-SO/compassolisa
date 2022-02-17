const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
    if (err) return res.status(401).json(err);

    req.useId = decoded.id;

    return next();
  });
};
