const express = require("express");
const DataBaseConnection = require("./config/db");
const expressLayouts = require("express-ejs-layouts");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DataBaseConnection();

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/index.js"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 8000;
app.listen(
  PORT,
  console.log(`Server started on  http://localhost:${PORT}/ !!!`)
);
