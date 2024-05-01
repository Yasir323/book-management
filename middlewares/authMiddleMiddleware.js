const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, config.secretKey);
    req.userData = { userId: decoded.userId };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};
