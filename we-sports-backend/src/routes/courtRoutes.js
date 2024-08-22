const express = require('express');
const { getAllCourts, createCourt } = require('../controllers/courtController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllCourts);
router.post('/', authenticate, createCourt);

module.exports = router;