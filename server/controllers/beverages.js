/*--------------------- Beverage controllers ---------------------*/
const { validationResult } = require("express-validator");
const Beverage = require("../models/beverage");

const createBeverage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    beverage_name,
    beverage_image,
    beverage_category,
    alcohol_content,
    ingredients,
    instruction,
  } = req.body;
  try {
    const newBeverage = new Beverage({
      beverage_name,
      beverage_image,
      beverage_category,
      alcohol_content,
      ingredients,
      instruction,
      user: req.user.id,
    });
    const beverage = await new newBeverage.save();
    res.json(beverage);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

const getAllBeverages = async (req, res) => {
  try {
    console.log(req);
    const beverages = await Beverage.find()
      .sort({
        date: -1,
      })
      .populate("user", "username");
    console.log(beverages);
    res.json(beverages);
  } catch (error) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

const getAllBeveragesByCurrentUser = async (req, res) => {
  try {
    const beverages = await Beverage.find({ user: req.user.id })
      .sort({
        date: -1,
      })
      .populate("user", "username");
    res.json(beverages);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

const getBeverageByID = async (req, res) => {
  try {
    const { id } = req.params;
    const beverage = await Beverage.findById(id).populate("user", "username");
    if (!beverage) {
      return res.status(404).json({ msg: "Beverage not found" });
    }
    res.json(beverage);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
};

const updateBeverage = async (req, res) => {
  try {
    const beverage = await Beverage.findOneAndUpdate(
      { user: req.user.id },
      req.body,
      { new: true }
    );
    if (!beverage) {
      return res.status(404).json({ msg: "Beverage not found" });
    }
    if (beverage.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    res.json(beverage);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

const deleteBeverage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBeverage = await Beverage.findById(id);
    if (!deletedBeverage) {
      return res.status(404).json({ msg: "Beverage not found" });
    }
    if (deletedBeverage.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await deletedBeverage.remove();
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

module.exports = {
  createBeverage,
  getAllBeverages,
  getAllBeveragesByCurrentUser,
  getBeverageByID,
  updateBeverage,
  deleteBeverage,
};
