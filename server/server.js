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

const routes = require("./routes");
//log message on console when you make request
const logger = require("morgan");

const app = express();
const User = require("./models/user");



//----------------------------End of Import-----------------

//Middleware
db.on("error", console.error.bind(console, "MongoDB connection error"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


//Using express session middleware
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"))

//refreshes passport when there are new routes added
app.use(passport.initialize());

//passport will connect to the session collection of express and use this collection as user authentication mechanism
app.use(passport.session())

//passport will be pass in to the function in the passportConfig file
require("./passportConfig")(passport);


//----------------------------End of Middleware-----------------

//Routes

app.use("/api", routes)



//----------------------------End of Routes-----------------

//Start Server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});