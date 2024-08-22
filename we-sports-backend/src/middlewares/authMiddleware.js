const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    console.log("authentication done")
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authenticate };
