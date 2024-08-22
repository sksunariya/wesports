const db = require('../database/db');

const createUserTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `;
  db.run(sql);
};

const createUser = (user, callback) => {
  const { name, email, password } = user;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.run(sql, [name, email, password], function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, { id: this.lastID });
    }
  });
};

const findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.get(sql, [email], (err, row) => {
    callback(err, row);
  });
};

createUserTable();

module.exports = { createUser, findUserByEmail };
