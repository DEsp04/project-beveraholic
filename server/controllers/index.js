//Controllers for Backend
const User = require("../models/user");
const BeverageCategory = require("../models/beverageCategory");
const Beverage = require("../models/beverage");
//Hash password
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load input validation
// const validateRegistration = require("../validators/register");
// const validateLogin = require("../validators/login");

//----------------------User Controller--------------------

const createRegistration = async (req, res) => {
  try {
    // Form validation
    // const { errors, isValid } = validateRegistration(req.body);
    // console.log(isValid)
    // // Check validation
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    await User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });

        await newUser.save();
        res.send("User Created");
      }
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res, next) => {
  console.log(req.body);
  try {
    // Form validation
    // const { errors, isValid } = validateLogin(req.body);

    // // Check validation
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }

    await passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send(req.user.username);
          console.log("Here", req.user);
        });
      }
    })(req, res, next);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};




//----------------------Beverage Controller--------------------

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
  createRegistration,
  loginUser,
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
