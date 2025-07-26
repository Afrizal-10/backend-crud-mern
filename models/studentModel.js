const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    npm: {
      type: Number,
    },
    nama: {
      type: String,
    },
    fakultas: {
      type: String,
    },
    prodi: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("students", studentSchema);
