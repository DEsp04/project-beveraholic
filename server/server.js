//Server
const db = require("./db");
const PORT = process.env.PORT || 5000;

//framework for server
const express = require("express");

//specific local host have access to the server
const cors = require("cors");

//Integrates with express and uses strategies to authenticate an user
const passport = require("passport")

//One of many passport strategies to authenticate users
const passportLocal = require("passport-local").Strategy;

//Cookie store data in the Browser
const cookieParser = require("cookie-parser");

//Hash password
const bcrypt = require("bcryptjs");

//Session store large data in the server
const session = require("express-session");

const app = express();
const User = require("./models/user");

//----------------------------End of Import-----------------

//Middleware


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.on("error", console.error.bind(console, "MongoDB connection error"));




//----------------------------End of Middleware-----------------

//Routes



//----------------------------End of Routes-----------------

//Start Server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});