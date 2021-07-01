//App
//framework for server
const express = require("express");

//specific local host have access to the server
const cors = require("cors");

const logger = require("morgan");

const userRoutes = require("./routes/users");
const beverageRoutes = require("./routes/beverages");
const beverageCategoryRoutes = require("./routes/beverageCategories");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// app.use(express.json({ extended: false }));

app.use(logger("dev"));

app.use(cors());

app.get("/", (req, res) => res.send("API is running!"));

app.use("/api/user", userRoutes);
app.use("/api/beverages", beverageRoutes);
app.use("/api/beverageCategories", beverageCategoryRoutes);

module.exports = app;
