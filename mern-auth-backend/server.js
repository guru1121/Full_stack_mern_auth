require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 6001; // Use 6001 if PORT is not set


// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define routes
app.use('/api/auth', require('./routes/userRoutes'));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
