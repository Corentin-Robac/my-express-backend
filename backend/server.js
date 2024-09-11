// backend/server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const apiRoutes = require('./routes/api');
dotenv.config();

const port = process.env.PORT || 3000;

// Middleware static
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'page2.html'));
});

app.use('/api', apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
