// server/src/index.js
// Express server entry point — starts the API server

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ClientLocker API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`ClientLocker server running on port ${PORT}`);
});

