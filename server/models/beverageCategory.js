/*--------------------- Beverage category Schema to post users' name and password to database ---------------------*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeverageCategory = new Schema(
  {
    category_name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("beverage_categories", BeverageCategory);
