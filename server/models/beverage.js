/*--------------------- Beverage Schema to post users' name and password to database ---------------------*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Beverage = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    beverage_name: {
      type: String,
      required: true,
    },
    beverage_image: {
      type: String,
      required: true,
    },
    beverage_category: {
      type: String,
      required: true,
    },
    alcohol_content: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    instruction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("beverages", Beverage);
