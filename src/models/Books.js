"use strict";
const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    summary: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
