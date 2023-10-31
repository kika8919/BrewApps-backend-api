"use strict";
const express = require("express");
const router = express.Router();

const bookController = require("../controller/book.controller");

router.get("/", bookController.getAllBooks);

// Get a book by ID
router.get("/:id", bookController.getBookById);

// Add a new book
router.post("/", bookController.addBook);

// Update a book by ID
router.put("/:id", bookController.updateBook);

// Delete a book by ID
router.delete("/:id", bookController.deleteBook);

module.exports = router;
