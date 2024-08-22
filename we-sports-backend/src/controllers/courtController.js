const Court = require('../models/Court');

const getAllCourts = (req, res) => {
  Court.getAllCourts((err, courts) => {
    if (err) return res.status(500).json({ message: 'Error fetching courts' });
    res.status(200).json(courts);
  });
};

const createCourt = (req, res) => {
  const { name, location, description, imageUrl } = req.body;

  Court.createCourt({ name, location, description, imageUrl }, (err, court) => {
    if (err) return res.status(500).json({ message: 'Error creating court' });
    res.status(201).json(court);
  });
};

module.exports = { getAllCourts, createCourt };
