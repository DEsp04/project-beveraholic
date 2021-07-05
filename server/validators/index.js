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

exports.beverageValidator = () => {
  return [
    check("beverage_name")
      .notEmpty()
      .withMessage("Beverage name is required")
      .not(),
    check("beverage_image")
      .notEmpty()
      .withMessage("Beverage image is required")
      .not(),
    check("beverage_category")
      .notEmpty()
      .withMessage("Beverage category is required")
      .not(),
    check("alcohol_content")
      .notEmpty()
      .withMessage("alcohol content is required")
      .not(),
    check("ingredients").notEmpty().withMessage("ingredient is required").not(),
    check("instruction")
      .notEmpty()
      .withMessage("instruction is required")
      .not(),
  ];
};
