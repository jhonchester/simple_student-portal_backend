const express = require("express");
const path = require("path");
const app = express();

const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

// Serve static frontend files from /public
app.use(express.static(path.join(__dirname, "public")));

// Mount API route
app.use("/student", studentRoutes);

module.exports = app;