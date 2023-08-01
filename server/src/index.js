const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Require the auth.js file
const authRoutes = require("./auth");
app.use(authRoutes);

// Start the server
const port = 3000; // You can change this to your desired port number
app.listen(port, () => {
  console.log("Server running on port", port);
});
