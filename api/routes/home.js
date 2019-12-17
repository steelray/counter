const express = require('express');
const router = express.Router();
// localhost:3000/auth/login
router.get('/', (req, res) => {
  res.status(200).json('api is running')
});

module.exports = router;