//User ontrollers for Backend
const User = require("../models/users");
//Hash password
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load input validation
const validateRegistration = require("../validators/register");
const validateLogin = require("../validators/login");

const createRegistration = async (req, res) => {
  try {
    // Form validation
    const { errors, isValid } = validateRegistration(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

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
    const { errors, isValid } = validateLogin(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

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

module.exports = {
  createRegistration,
  loginUser,
};
