const express = require('express');
const router = express.Router();

// Example route to handle fetch request
router.get('/example', (req, res) => {
  // In future, handle real data fetching here
  res.json({ message: 'This is an example response from the server!' });
});

module.exports = router;
