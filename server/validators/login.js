// login validation
const validator = require("validator");
const isEmpty = require("lodash.isempty");

const loginValidation = () => {
  let errors = {};

  // isEmpty converts empty fields to empty strings so we can use validator
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //check if email is valid
  if (validator.isEmpty(data.email)) {
    errors.email = "Email address is required!";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "This email is invalid";
  }

  //check if password is valid
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = loginValidation;
