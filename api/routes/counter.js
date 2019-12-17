const express = require('express');
const router = express.Router();
const controller = require('../controllers/counter');
router.get('/', controller.counter);
router.post('/increment', controller.increment);

module.exports = router;