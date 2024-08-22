const Match = require('../models/Match');

const getAllMatches = (req, res) => {
  Match.getAllMatches((err, matches) => {
    if (err) return res.status(500).json({ message: 'Error fetching matches' });
    console.log("matches found", matches);
    res.status(200).json(matches);
  });
};

const createMatch = (req, res) => {
  const { sport, location, time, description } = req.body;
  const userId = req.user.id;

  Match.createMatch({ sport, location, time, description, userId }, (err, match) => {
    if (err) return res.status(500).json({ message: 'Error creating match' });
    res.status(201).json(match);
  });
};

module.exports = { getAllMatches, createMatch };
