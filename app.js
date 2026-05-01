require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database");

// Routes
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.send("API is working");
});

// Routes
app.use("/api/products", productRoute);
app.use("/api/user", userRoute);

// Start server AFTER DB connects
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();