const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      max: 255,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      max: 24,
      min: 8,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
