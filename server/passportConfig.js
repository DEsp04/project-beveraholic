//--- Authenticating users by implementing passport strategy called 'localStrategy'

const User = require('./models/user');

//--- hash passwords ---
const bcrypt = require('require');

const localStrategy = require('passport-local').Strategy;


//---  ---