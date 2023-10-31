"use strict";
const mongoose = require("mongoose");
const Book = mongoose.model("Book");
const { validateId } = require("../config/utils");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books.map((book) => book.toJson()));
  } catch (err) {
    next(err);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!validateId(id)) {
      return res.status(400).json({ message: "input id is invalid" });
    }
    const book = await Book.findById(id);
    if (book) {
      res.json(book.toJson());
    } else {
      res.json({ message: "Book not found" });
    }
  } catch (err) {
    next(err);
  }
};

const addBook = async (req, res, next) => {
  try {
    const { title, author, summary } = req.body;
    const book = new Book({
      title,
      author,
      summary,
    });
    const createdBook = await Book.create(book);
    res.status(201).json(createdBook.toJson());
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!validateId(id)) {
      return res.status(400).json({ message: "input id is invalid" });
    }
    const { title, author, summary } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: { title, author, summary },
      },
      { new: true }
    );
    if (!updatedBook) {
      res.json({ message: "Book not found" });
    } else {
      res.json(updatedBook.toJson());
    }
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!validateId(id)) {
      return res.status(400).json({ message: "input id is invalid" });
    }
    const response = await Book.findByIdAndDelete(id);
    if (response) {
      res.json({ message: "Book deleted" });
    } else {
      res.json({ message: "Book not found" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
