// server.js

// Import necessary packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize the Express application
const app = express();
const PORT = 3000;
app.use(cors());

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// MongoDB connection URI
// Simple connection without authentication for local development
const mongoUri = "mongodb://localhost:27017/test";

// Connect to MongoDB
mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a Mongoose Schema for a Password Entry
// This defines the structure of our documents in the 'passwords' collection.
const passwordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: String,
  icon: {
    type: String, // Store icon as base64 string or URL
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose Model from the schema
// 'PasswordEntry' is the name of our model, and Mongoose will automatically
// create a 'passwordentries' collection in the database.
const PasswordEntry = mongoose.model("PasswordEntry", passwordSchema);

// --- CRUD Routes for the Password resource ---

// CREATE a new password entry
app.post("/api/passwords", async (req, res) => {
  try {
    const newPassword = new PasswordEntry(req.body);
    const savedPassword = await newPassword.save();
    res.status(201).json(savedPassword);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ all password entries
app.get("/api/passwords", async (req, res) => {
  try {
    const passwords = await PasswordEntry.find();
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ a single password entry by ID
app.get("/api/passwords/:id", async (req, res) => {
  try {
    const password = await PasswordEntry.findById(req.params.id);
    if (!password) {
      return res.status(404).json({ message: "Password entry not found" });
    }
    res.json(password);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a password entry by ID
app.put("/api/passwords/:id", async (req, res) => {
  try {
    // Add updatedAt timestamp
    req.body.updatedAt = new Date();

    const updatedPassword = await PasswordEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPassword) {
      return res.status(404).json({ message: "Password entry not found" });
    }
    res.json(updatedPassword);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a password entry by ID
app.delete("/api/passwords/:id", async (req, res) => {
  try {
    const deletedPassword = await PasswordEntry.findByIdAndDelete(
      req.params.id
    );
    if (!deletedPassword) {
      return res.status(404).json({ message: "Password entry not found" });
    }
    res.json({ message: "Password entry deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
