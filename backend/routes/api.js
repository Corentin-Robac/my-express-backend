const express = require('express');
const router = express.Router();

// Example
router.get('/example', (req, res) => {
  res.json({ message: 'This is an example response from the server!' });
});

module.exports = router;
