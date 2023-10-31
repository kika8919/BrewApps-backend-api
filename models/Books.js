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

bookSchema.methods.toJson = function () {
  return {
    id: this._id,
    title: this.title,
    author: this.author,
    summary: this.summary,
  };
};

module.exports = mongoose.model("Book", bookSchema);
