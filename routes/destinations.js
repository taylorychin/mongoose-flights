const express = require('express');
const router = express.Router();

const destController = require('../controllers/destinations');

router.post('/flights/:flightId/destinations', destController.create);

module.exports = router;