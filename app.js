const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const disasterRoutes = require('./routes/disasterRoutes'); // Import routes

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Allows JSON data in request body
app.use(cors()); // Enables cross-origin requests

// Connect to MongoDB
connectDB(); // This line connects to MongoDB

//  ADD THIS LINE BELOW connectDB()
app.use('/api/disasters', disasterRoutes); // Register the route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
