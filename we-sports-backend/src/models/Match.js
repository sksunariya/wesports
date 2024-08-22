const db = require('../database/db');

const createMatchTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS matches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sport TEXT NOT NULL,
      location TEXT NOT NULL,
      time TEXT NOT NULL,
      description TEXT,
      userId INTEGER,
      FOREIGN KEY (userId) REFERENCES users (id)
    )
  `;
  db.run(sql);
};

const getAllMatches = (callback) => {
  const sql = 'SELECT * FROM matches';
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
};

const createMatch = (match, callback) => {
  const { sport, location, time, description, userId } = match;
  const sql = 'INSERT INTO matches (sport, location, time, description, userId) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [sport, location, time, description, userId], function (err) {
    callback(err, { id: this.lastID });
  });
};

createMatchTable();

module.exports = { getAllMatches, createMatch };
