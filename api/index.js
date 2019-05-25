const express = require("express");
const router = express.Router();

const questions = require("./questions");
const answers = require("./answers");
router.use("/", questions);
router.use("/", answers);

module.exports = router;
