//--- Authenticating users by implementing passport strategy called 'localStrategy'

const User = require('./models/user');

//--- hash passwords ---
const bcrypt = require('require');

const localStrategy = require('passport-local').Strategy;


//--- function below will use localStrategy to help find a matching username and password in the User database ---
passport.use();



//--- Passport Serializer Here: user is put inside express session ---


//--- Passport Deserializer Here: grab user outside of express session ---