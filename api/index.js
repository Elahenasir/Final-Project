const express = require("express");
const router = express.Router();
// 
const class2 = require("./class2");
const questions = require("./questions");
router.use("/", class2);
router.use("/", questions);

module.exports = router;
