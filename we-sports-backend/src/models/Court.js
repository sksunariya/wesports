const db = require('../database/db');

const createCourtTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS courts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      location TEXT NOT NULL,
      description TEXT NOT NULL,
      imageUrl TEXT NOT NULL
    )
  `;
  db.run(sql);
};

const getAllCourts = (callback) => {
  const sql = 'SELECT * FROM courts';
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
};

const getCourtById = (id, callback) => {
  const sql = 'SELECT * FROM courts WHERE id = ?';
  db.get(sql, [id], (err, row) => {
    callback(err, row);
  });
};

const createCourt = (court, callback) => {
  const { name, location, description, imageUrl } = court;
  const sql = 'INSERT INTO courts (name, location, description, imageUrl) VALUES (?, ?, ?, ?)';
  db.run(sql, [name, location, description, imageUrl], function (err) {
    callback(err, { id: this.lastID });
  });
};

createCourtTable();

module.exports = { getAllCourts, getCourtById, createCourt };
