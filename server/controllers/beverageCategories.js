/*--------------------- Beverage category controllers ---------------------*/
const BeverageCategory = require("../models/beverageCategory");

const createCategory = async (req, res) => {
  try {
    const category = await new BeverageCategory(req.body);
    await category.save();
    return res.status(201).json({ category });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await BeerageCategory.find();
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

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryByID,
  updateCategory,
  deleteCategory,
  getAllBeveragesByCategories,
};
