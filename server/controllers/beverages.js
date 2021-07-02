/*--------------------- Beverage controllers ---------------------*/
const Beverage = require("../models/beverage");

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
    console.log(beverages);
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
      (err, beverge) => {
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
  createBeverage,
  getAllBeverages,
  getBeverageByID,
  updateBeverage,
  deleteBeverage,
};
