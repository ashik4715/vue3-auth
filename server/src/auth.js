const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const moment = require("moment");
const bcrypt = require("bcrypt");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();
router.use(express.json());
router.use(cors());
router.use(bodyParser.json());

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

router.get("/verify-token", verifyToken, (req, res) => {
  // Token is valid, send a success response
  res.status(200).json({ message: "Token is valid" });
});

router.get("/users", verifyToken, (req, res) => {
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

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, (error, hashedPassword) => {
    if (error) {
      console.error("Error hashing password:", error);
      return res.status(500).json({ message: "Error registering user" });
    }

    // Get the current date and time in the desired format (e.g., "YYYY-MM-DD HH:mm:ss")
    const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");

    const query = `
      INSERT INTO users (name, email, password, created_at, updated_at)
      VALUES ('${name}', '${email}', '${hashedPassword}', '${currentDate}', '${currentDate}')
    `;

    db.query(query, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Error registering user" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
});

router.post("/login", (req, res) => {
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

router.delete("/register/:id", (req, res) => {
  const userId = req.params.id;
  const query = `DELETE FROM users WHERE id = ${userId}`;

  db.query(query, (error, result) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error deleting user from server" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  });
});

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, path.join(__dirname, "../assets/image"));
    cb(
      null,
      "/Users/mdashikurrahman/Downloads/vue-codes/shahriar-projects/vue-shahriar/client/public/meta_images"
    );
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// POST route for handling the form submission
router.post("/add-home", upload.single("image"), (req, res) => {
  const { meta_title, meta_description } = req.query;
  const { filename: summary_large_image } = req.file;

  // Get the current date and time in the desired format (e.g., "YYYY-MM-DD HH:mm:ss")
  const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");

  const sql =
    "INSERT INTO metaHomePage (meta_title, meta_description, summary_large_image, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      meta_title,
      meta_description,
      summary_large_image,
      currentDate,
      currentDate,
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting data into MySQL:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      console.log("Data inserted into MySQL:", results);

      // Send a success response
      res.status(200).json({ message: "Form submitted successfully" });
    }
  );
});

router.get("/all-home", verifyToken, (req, res) => {
  const query = "SELECT * FROM metaHomePage";

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving user data:", error);
      return res.status(500).json({ message: "Error retrieving user data" });
    }

    const users = results.map((user) => {
      return {
        id: user.id,
        meta_title: user.meta_title,
        meta_description: user.meta_description,
        summary_large_image: user.summary_large_image,
        created_at: user.created_at,
      };
    });

    res.status(200).json(users);
  });
});

// DELETE route for deleting a specific home meta data
router.delete("/delete-home/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM metaHomePage WHERE id = ?";
  db.query(sql, [id], (error, results) => {
    if (error) {
      console.error("Error retrieving data from MySQL:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: "Data not found" });
      return;
    }

    const { summary_large_image } = results[0];
    const imagePath = path.join(
      __dirname,
      "../assets/image",
      summary_large_image
    );

    // Delete the file from the assets/image folder
    fs.unlink(imagePath, (error) => {
      if (error) {
        console.error("Error deleting file:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      // Delete the row from the metaHomePage table
      const deleteSql = "DELETE FROM metaHomePage WHERE id = ?";
      db.query(deleteSql, [id], (error, results) => {
        if (error) {
          console.error("Error deleting data from MySQL:", error);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        console.log("Data deleted from MySQL:", results);

        // Send a success response
        res.status(200).json({ message: "Data deleted successfully" });
      });
    });
  });
});

router.post("/meta-home", upload.single("summary_large_image"), (req, res) => {
  const { meta_title, meta_description } = req.body;
  const { filename: summary_large_image } = req.file;

  // Get the current date and time in the desired format (e.g., "YYYY-MM-DD HH:mm:ss")
  const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");

  const sql =
    "INSERT INTO metaHomePage (meta_title, meta_description, summary_large_image, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      meta_title,
      meta_description,
      summary_large_image,
      currentDate,
      currentDate,
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting data into MySQL:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      console.log("Data inserted into MySQL:", results);

      // Send a success response
      res.status(200).json({ message: "Form submitted successfully" });
    }
  );
});

router.delete("/meta-home/:id", (req, res) => {
  const userId = req.params.id;

  const sql = "SELECT summary_large_image FROM metaHomePage WHERE id = ?";
  db.query(sql, [userId], (error, results) => {
    if (error) {
      console.error("Error retrieving data from MySQL:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: "Record not found" });
      return;
    }

    const summary_large_image = results[0].summary_large_image;

    const deleteSql = "DELETE FROM metaHomePage WHERE id = ?";
    db.query(deleteSql, [userId], (error, deleteResults) => {
      if (error) {
        console.error("Error deleting data from MySQL:", error);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      console.log("Data deleted from MySQL:", deleteResults);

      // Unlink (delete) the image file from the path
      const imagePath = `/Users/mdashikurrahman/Downloads/vue-codes/shahriar-projects/vue-shahriar/client/public/meta_images/${summary_large_image}`;
      fs.unlink(imagePath, (error) => {
        if (error) {
          console.error("Error deleting image file:", error);
          // You can choose to send an error response here if needed
        } else {
          console.log("Image file deleted:", imagePath);
        }
      });

      // Send a success response
      res.status(200).json({ message: "Data deleted successfully" });
    });
  });
});

module.exports = router;
