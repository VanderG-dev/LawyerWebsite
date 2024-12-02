const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // For serving static files
require("dotenv").config(); // For environment variables

const telegramRoutes = require("./routes/telegramRoutes"); // Import Telegram routes

const app = express();

// Middleware
const corsOptions = {
  origin: ["https://lawyerwebsite-synv.onrender.com", "http://localhost:5173"], // Update with frontend URLs
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json()); // Parse JSON bodies

// Use routes
app.use("/api", telegramRoutes); // Prefix all Telegram routes with /api

// Serve static files from the React app
const CLIENT_BUILD_PATH = path.join(__dirname, "Frontend", "dist");
app.use(express.static(CLIENT_BUILD_PATH));

// Catch-all handler for React routes
app.get("*", (req, res) => {
  res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
