//App
//framework for server
const express = require("express");

//specific local host have access to the server
const cors = require("cors");

//Integrates with express and uses strategies to authenticate an user
const passport = require("passport");

//One of many passport strategies to authenticate users
// const passportLocal = require("passport-local").Strategy;

//Cookie store data in the Browser
const cookieParser = require("cookie-parser");

//Session store large data in the server
const session = require("express-session");

// const users = require("./routes/users");
// const beverages = require("./routes/beverages");

//----------------------------End of Import-----------------

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));

//refreshes passport when there are new routes added
app.use(passport.initialize());

//passport will connect to the session collection of express and use this collection as user authentication mechanism
app.use(passport.session());

//passport will be pass in to the function in the passportConfig file
require("./config/passport")(passport);

app.use("/api", routes);

// app.use("/api/users", users);

// app.use("/api/beverages", beverages);

module.exports = app;
