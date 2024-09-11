const express = require('express');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

// Serve static files (HTML, CSS, JS)
app.use(express.static('frontend'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
