const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Connect to DB
const database = require("./config/database");
database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
const studentRoute = require("./routes/studentRoute");
app.use("/mahasiswa", studentRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
