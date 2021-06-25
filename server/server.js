//Server
const db = require("./db");
const PORT = process.env.PORT || 5000;

//framework for server
const express = require("express");

//specific local host have access to the server
const cors = require("cors");

//
const passport = require("passport")

//
const passportLocal = require("passport-local").Strategy;

//Cookie store data in the Browser
const cookieParser = require("cookie-parser");

//Hash password
const bcrypt = require("bcryptjs");

//Session store large data in the server
const session = require("express-session");

const app = express();
const User = require("./models/user");