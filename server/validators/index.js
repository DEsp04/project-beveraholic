/*--------------------- This method create custom express validator using middleware ---------------------*/
const { check } = require("express-validator");

exports.registerValidator = () => {
  return [
    check("username").notEmpty().withMessage("username is required").not(),
    check("email").notEmpty().withMessage("Email is required").not(),
    check("password")
      .notEmpty()
      .withMessage("password is required")
      .isLength({ min: 8 })
      .withMessage("password must be 8 characters"),
  ];
};

exports.loginValidator = () => {
  return [
    check("email").isEmail().withMessage("email is required"),
    check("password").exists().withMessage("password is required"),
  ];
};
