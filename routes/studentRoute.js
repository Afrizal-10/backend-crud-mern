const express = require("express");
const {
  addData,
  getData,
  getDataById,
  updateData,
  deleteData,
} = require("../controllers/studentController");
const route = express.Router();

route.post("/addData", addData);
route.get("/getData", getData);
route.get("/getData/:id", getDataById);
route.put("/editData/:id", updateData);
route.delete("/deleteData/:id", deleteData);

module.exports = route;
