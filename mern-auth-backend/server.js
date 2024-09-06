require('dotenv').config();
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define routes
app.use('/api/auth', require('./routes/userRoutes'));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
