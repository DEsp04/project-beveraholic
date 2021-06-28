// register/signup validation
const validator = require("validator");
const isEmpty = require("lodash.isempty");

const registerValidation = () => {
  let errors = {};

  // isEmpty converts empty fields to empty strings so we can use validator
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordConfirm = !isEmpty(data.asswordConfirm)
    ? data.asswordConfirm
    : "";

  //check if name is valid
  if (validator.isEmpty(data.name)) {
    errors.username = "Username is required!";
  }

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
  if (validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = "Password is required";
  }
  if (!validator.isLength(data.password, { min: 12, max: 32 })) {
    errors.password = "Password must be at least 12 characters";
  }
  //check if password and passwordConfirm match
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = registerValidation;
