const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "1234",
  database: "laravel",
});

// Establish the MySQL connection
db.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL:", error);
    return;
  }
  console.log("Connected to MySQL server");
});

// Create a middleware function to verify the JWT token:
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, "your_secret_key", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
};

app.get("/verify-token", verifyToken, (req, res) => {
  // Token is valid, send a success response
  res.status(200).json({ message: "Token is valid" });
});

app.get("/users", verifyToken, (req, res) => {
  const query = "SELECT * FROM users";

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving user data:", error);
      return res.status(500).json({ message: "Error retrieving user data" });
    }

    const users = results.map((user) => {
      return { id: user.id, name: user.name, email: user.email };
    });

    res.status(200).json(users);
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, (error, hashedPassword) => {
    if (error) {
      console.error("Error hashing password:", error);
      return res.status(500).json({ message: "Error registering user" });
    }

    const query = `INSERT INTO users (name, email, password) VALUES ('${name}','${email}', '${hashedPassword}')`;
    db.query(query, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Error registering user" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email='${email}'`;
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Error logging in" });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    bcrypt.compare(password, results[0].password, (error, result) => {
      if (error) {
        console.error("Error comparing passwords:", error);
        return res.status(500).json({ message: "Error logging in" });
      }

      if (!result) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        { email: results[0].email, id: results[0].id },
        "your_secret_key"
      );

      res.status(200).json({ message: "Login successful", token });
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
