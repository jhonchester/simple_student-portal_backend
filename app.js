const express = require("express");
const app = express();

const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

// Automatically redirect root `/` to `/student` route
app.use("/", studentRoutes);

// Mount student routes as well
app.use("/student", studentRoutes);

module.exports = app;