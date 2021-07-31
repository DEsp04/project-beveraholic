/*--------------------- Beverage Schema to post users' name and password to database ---------------------*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteBeverage = new Schema(
  {
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
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    beverage_id: { type: Schema.Types.ObjectId, ref:"beverages" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("favoriteBeverage", FavoriteBeverage);