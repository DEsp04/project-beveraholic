//Seed for backend
const db = require("../db");
const Beverages = require("../models/beverage");
const BeverageCategoriess = require("../models/beverageCategory");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));
