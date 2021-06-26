//--- Authenticating users by implementing passport strategy called 'localStrategy'

const User = require('./models/user');

//--- hash passwords ---
const bcrypt = require("bcryptjs");

const localStrategy = require('passport-local').Strategy;


//--- function below will use localStrategy to help find a matching username and password in the User database ---
module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );
  


  //--- Passport Serializer Here: user is put inside express session ---
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  })

  //--- Passport Deserializer Here: grab user outside of express session ---
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };

      cb(err, userInformation);
    });
  });


};



