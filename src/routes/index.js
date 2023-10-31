"use strict";
const express = require("express");
const router = express.Router();

router.use("/book", require("./books.route"));

module.exports = router;
