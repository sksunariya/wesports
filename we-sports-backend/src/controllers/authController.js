const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret } = require('../config');

const signup = (req, res) => {
  const { name, email, password } = req.body;

  console.log("data received: ", name, email, password);

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ message: 'Error hashing password' });

    User.createUser({ name, email, password: hash }, (err, user) => {
      if (err) return res.status(400).json({ message: 'User already exists' });
      console.log("User account created. ", name, email);
      res.status(201).json({ user });
    });
  });
  
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, (err, user) => {
    if (err || !user) return res.status(401).json({ message: 'User not found' });

    bcrypt.compare(password, user.password, (err, match) => {
      if (err || !match) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });
      
      res.status(200).json({ token });
    });
  });
};

module.exports = { signup, login };
