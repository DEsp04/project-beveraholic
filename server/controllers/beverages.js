//Beverage ontrollers for Backend
const passport = require("passport");
require("../config/passport")(passport);
const BeverageCategory = require("../models/beverageCategory");
const Beverage = require("../models/beverage");

const createCategory = async (req, res) => {
  try {
    // passport.authenticate(
    //   "local",
    //   // {
    //   // successRedirect: "/",
    //   // failureRedirect: "/login",
    //   // successFlash: "Welcome!",
    //   // failureFlash: "Invalid username or password.",
    //   // }
    //   (req, res, err) => {
    //     if (err) throw err;
    //     if (!user) res.send("No User Exists");
    //     else {
    //       req.logIn(user, (err) => {
    //         if (err) throw err;
    //         res.send(req.user.username);
    //         console.log("Here", req.user);
    //       });
    //     }
    //   }
    // );
    const category = await new BeverageCategory(req.body);
    await category.save();
    return res.status(201).json({ category });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await BeverageCategory.find();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).send(eror.message);
  }
};

const getCategoryByID = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await BeverageCategory.findById(id);
    if (category) {
      return res.status(200).json({ category });
    }
    return res.status(404).send("Category not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await BeverageCategory.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, category) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!category) {
          res.status(500).send("Category not found!");
        }
        return res.status(200).json(category);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await BeverageCategory.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Category deleted.");
    }
    throw new Error("Category not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/*******/
const getAllBeveragesByCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const beverages = await BeverageCategory.find({ category_name: id });
    return res.status(200).json({ beverages });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
/*******/

const createBeverage = async (req, res) => {
  try {
    const beverage = await new Beverage(req.body);
    await beverage.save();
    return res.status(201).json({ beverage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllBeverages = async (req, res) => {
  try {
    const beverages = await Beverage.find();
    return res.status(200).json({ beverages });
  } catch (error) {
    return res.status(500).send(eror.message);
  }
};

const getBeverageByID = async (req, res) => {
  try {
    const { id } = req.params;
    const beverage = await Beverage.findById(id);
    if (beverage) {
      return res.status(200).json({ beverage });
    }
    return res.status(404).send("Beverage not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateBeverage = async (req, res) => {
  try {
    const { id } = req.params;
    await Beverage.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, beverage) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!beverage) {
          res.status(500).send("Beverage not found!");
        }
        return res.status(200).json(beverage);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteBeverage = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Beverage.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Beverage deleted.");
    }
    throw new Error("Beverage not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryByID,
  updateCategory,
  deleteCategory,
  getAllBeveragesByCategories,
  createBeverage,
  getAllBeverages,
  getBeverageByID,
  updateBeverage,
  deleteBeverage,
};
