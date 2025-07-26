const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Koneksi Database
const database = require("../config/database");
database();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("Backend is running on Vercel");
});

// Routes
const studentRoute = require("../routes/studentRoute");
app.use("/mahasiswa", studentRoute);

module.exports = app;
