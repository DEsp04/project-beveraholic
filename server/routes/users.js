/*--------------------- User routes ---------------------  */
const { Router } = require("express");
const userRouter = Router();
const userControllers = require("../controllers/users");
const { registerValidator, loginValidator } = require("../validators");
const auth = require("../config/authentication");

userRouter.get("/user", auth, userControllers.getUser);

userRouter.post("/register", registerValidator(), userControllers.registerUser);

userRouter.post("/login", loginValidator(), userControllers.loginUser);

module.exports = userRouter;
