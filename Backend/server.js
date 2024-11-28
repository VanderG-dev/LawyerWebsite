const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config(); // For environment variables

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// POST route for sending messages to Telegram
app.post("/api/telegram", async (req, res) => {
  const { name, email, number, problem, consultationType } = req.body;

  // Build the message for Telegram
  const message = `
<b>Заявка с сайта:</b>
<b>Имя:</b> ${name}
<b>Почта:</b> ${email}
<b>Телефон:</b> ${number}
<b>Проблема:</b> ${problem}
<b>Форма консультации:</b> ${consultationType}
  `;

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Load from environment variables
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID; // Load from environment variables
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    const response = await axios.post(URI_API, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    });
    res.status(200).send({ success: true, data: response.data });
  } catch (error) {
    console.error("Error sending message to Telegram:", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
