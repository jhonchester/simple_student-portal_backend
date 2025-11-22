const express = require("express");
const router = express.Router();
const { getStudentInfo } = require("../controllers/studentController");

// GET /student
router.get("/", getStudentInfo);

module.exports = router;