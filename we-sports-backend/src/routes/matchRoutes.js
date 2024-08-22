const express = require('express');
const { getAllMatches, createMatch } = require('../controllers/matchController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/',  getAllMatches);
router.post('/', authenticate, createMatch);

module.exports = router;