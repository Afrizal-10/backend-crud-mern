const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// DataBase
const database = require("../config/database");
database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Route
const studentRoute = require("../routes/studentRoute");
app.use("/mahasiswa", studentRoute);

module.exports = app;
