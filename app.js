// app.js
// Load environment variables
require("dotenv").config();

const express = require("express");
const connectDB = require('./config/database');

// Import routes
const productRoute = require("./routes/productRoute");
  

// Initialize app
const app = express();

// Middleware
app.use(express.json()); // allows JSON data in req.body

// DB
connectDB();


// Routes
app.use("/api/products", productRoute);


 // Start server
// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});