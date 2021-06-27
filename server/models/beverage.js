//--- Beverage Schema to post users' name and password to database ---

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Beverage = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    alcohol_content: { type: String, required: true },
    ingredients: { type: String, required: true },
    instruction: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("beverages", Beverage);
