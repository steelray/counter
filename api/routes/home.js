const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

// localhost:3000/auth/login
router.get('/', (req, res) => {
  res.status(200).json('api is running')
});

module.exports = router;