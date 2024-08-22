const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const courtRoutes = require('./routes/courtRoutes');
const matchRoutes = require('./routes/matchRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/courts', courtRoutes);
app.use('/api/matches', matchRoutes);

module.exports = app;
