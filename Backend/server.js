const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // For serving static files
require("dotenv").config(); // For environment variables

const telegramRoutes = require("./routes/telegramRoutes"); // Import Telegram routes

const app = express();

// Middleware
const corsOptions = {
  origin: [
    "https://lawyerwebsite-synv.onrender.com",
    "https://khlystovnn.com",
    "http://localhost:5000",
  ], // Update with frontend URLs
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json()); // Parse JSON bodies

// Use routes
app.use("/api", telegramRoutes); // Prefix all Telegram routes with /api

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
