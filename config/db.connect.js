const mongoose = require("mongoose");
require("../models/Books");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
